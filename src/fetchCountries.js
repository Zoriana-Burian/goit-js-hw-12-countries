const BASE_URL = 'https://restcountries.eu/v2/rest/name';


function fetchCounty(query) {
    return fetch(`${BASE_URL}/${query}`).then(response =>
      response.json()
    );
  }
  
  export default {fetchCounty};