import fetchApiCountries from './fetchCountries';
import countryCard from '../templates/countries.hbs';
import countriesListCard from '../templates/list-countries.hbs';
import getRefs from './refs';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import {error} from '@pnotify/core';
import debounce from'lodash.debounce';

const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
   
    clearContainer();
    const searchQuery = refs.input.value;

    if(!searchQuery){
      return;
    }
  
    fetchApiCountries(searchQuery)
        .then(renderCountry)
        .catch(error => console.log(error));
  }

 function renderCountry(country) {
  if (country.length > 10) {
    error({
        text: "Too many matches found. Please enter a more specific query!"
    });
} else if (country.length > 1 && country.length <= 10) {
  createMarkup(country, countriesListCard);
} else if (country.length === 1) {
  createMarkup(country, countryCard);
}
}
 
function createMarkup(country, temp) {
refs.container.insertAdjacentHTML('afterbegin', temp(country));
}

function clearContainer() {
refs.container.innerHTML = '';
}
  










 

