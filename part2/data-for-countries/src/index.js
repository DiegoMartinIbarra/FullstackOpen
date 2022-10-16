import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Filter } from './components/Filter';
import { importCountries } from './services/services';
import {Languages} from './components/Languagues';

const App = () => {

  const [ data, setData ] = useState([])  
  const [filter, setFilter] = useState('')

  /*Take the value of the Input */
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  /*Recover the data from the API*/
/*Old method 
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, [])
New method */
  
useEffect(() => {
    importCountries().then((data) =>{
      setData(data)
    });
  }, []);

  /*Filter of countries */ 
  const serchfilter = (element) => {
    var resultElements = data.filter((countries) =>{
      if(countries.name.common.toString().toLowerCase().includes(element.toLowerCase()) ){
        return countries.name.common;
      }
    });
    return resultElements;
  }

  let printData = serchfilter(filter);

  let country = [printData.map(country => country)];
  let countries = [printData.map(countries => countries.name.common )];
  let flags = [printData.map(countries => countries.flags.png )];
  let capital = [printData.map(countries => countries.capital )];
  let population = [printData.map(countries => countries.population )];
  let languages = [printData.map(countries => countries.languages )];
   
   /* Conditional Rendering */

  if( countries[0].length > 10  ){
    return (
      <div>
        <Filter filter={filter} handleFilter={handleFilter} />   
        Too many matches, plese specify another filter
      </div>
    )} 

  else if( countries[0].length > 1  ){
    return (
      <div>
        <Filter filter={filter} handleFilter={handleFilter} />    
        {countries[0].map((idcountry, index) => <p key={index}> {idcountry} </p>  )}
      </div>
    )
  }

  else {
    return (
      <div>   
        <Filter filter={filter} handleFilter={handleFilter} />    
        {countries[0].map((idcountry, index) => <h1 key={index}> {idcountry} </h1> )} 
        capital: {capital} <br/>
        population: {population} <br/>
        <h2>languages</h2>
        <Languages languages={languages} />
        <img src={flags[0]} />
      </div>  
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))