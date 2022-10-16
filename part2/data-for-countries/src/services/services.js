import axios from 'axios';

export const importCountries = () => {
  return axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
       /* console.log(response) */
        const  countriesData  = response.data;
       /* console.log(countriesData);*/
        return countriesData;
      })

}
