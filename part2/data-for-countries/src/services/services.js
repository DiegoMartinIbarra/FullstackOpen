import axios from 'axios';

export const importCountries = () => {
  return axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        const  countriesData  = response.data;
        return countriesData;
      })

}
