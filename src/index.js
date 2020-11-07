import fetchApiCountries from './fetchCountries'
import countryCard from '../templates/countries.hbs'
import countriesListCard from '../templates/list-countries.hbs'
import getRefs from './refs'
import '@pnotify/core/dist/BrightTheme.css';

const {error} = require('@pnotify/core');
const debounce = require('lodash.debounce');

const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
   
    clearContainer();
    const searchQuery = refs.input.value;
  
    fetchApiCountries(searchQuery)
      .then(renderCountry)
      .catch(onFetchError);
      
  }

  

  function renderCountry(country) {
      if(country.lenght > 10){
          error({ text: "Too many matches found. Please enter a more specific query" }) 
      } 
      else if(country.lenght <= 10){
        clearContainer();
        createMarkup(countriesListCard, country)  
      } 
      else if(country.lenght === 1){
        clearContainer();
        createMarkup(countryCard, country)
      }  
    
    
  }

  function onFetchError(error) {
    alert(error);
  }

function createMarkup(temp ,country) {
    refs.container.insertAdjacentHTML('afterbegin', temp(country))
}
 function clearContainer() {
     refs.container.innerHTML = '';
  }
  

