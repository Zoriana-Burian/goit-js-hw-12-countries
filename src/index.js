import fetchApiCountries from './fetchCountries'
import countryCard from '../templates/countries.hbs'
import countriesListCard from '../templates/list-countries.hbs'
import getRefs from './refs'

const debounce = require('lodash.debounce');

const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    clearContainer()
  
    const searchQuery = refs.input.value;
  
    fetchApiCountries(searchQuery)
      .then(renderCountry)
      .catch(onFetchError)
      
  }

  function renderCountry() {
    
    
  }

  function onFetchError(error) {
    alert(error);
  }


 function clearContainer() {
     refs.container.innerHTML = '';
  }
  

