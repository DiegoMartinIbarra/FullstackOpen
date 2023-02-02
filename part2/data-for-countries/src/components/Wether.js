import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Wether = ({country}) => {
  const [wether, setWether] = useState()

  let apiKey = process.env.REACT_APP_API_KEY;

  const importWeather = async () => {

     const response = await axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country}`);
    const weatherData = response.data;
    console.log(weatherData);
    return weatherData;
    }

    useEffect(() => {
      importWeather().then((data) =>{
        setWether(data)
      });
    }, []);

   /* return <>{console.log(wether)}</> */
    if (!wether){
      return <p>No country yet</p>
    }else{
        return (
           <>
            <p>Weather in {country}</p>
            {console.log(wether)}
            <p>Temperature {wether.current.temperature} </p>
            <img src={wether.current.weather_icons} />
            <p>Wind: {wether.current.wind_speed} mph, direction {wether.current.wind_dir}</p>
           </>
           )
          }
    }
  
  export {Wether};