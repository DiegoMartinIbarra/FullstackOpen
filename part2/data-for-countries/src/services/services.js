import axios from 'axios';

export const importCountries = () => {
  return axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
       // console.log('promise fulfilled')
       /* console.log(response) */
        const  countriesData  = response.data;
       // console.log(countriesData);
        return countriesData;
      })
}
/*
let apiKey = process.env.REACT_APP_API_KEY;
let country={capital : 'Uruguay'};

export const importWeather = () => {

  return axios
  
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${variable}`)
      .then(response => {
        console.log('promise fulfilled')
        console.log(response) 
        const  weatherData  = response.data;
        console.log(weatherData);
        return weatherData;
      })
}

*/
  /*Recover the data from the API*/
/*Old method 
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, []) */