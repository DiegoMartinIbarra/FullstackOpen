import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Filter } from './components/Filter';

const App = () => {

  const [ data, setData ] = useState([])  
  const [filter, setFilter] = useState('')

  /*Take the value of the Input */
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
/*Recover the data from the API*/
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, [])

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

  return (
    <div>
    <Filter filter={filter} handleFilter={handleFilter} />      
     {printData.map(countries => <p> {countries.name.common} </p> )}
    </div>
  )}

ReactDOM.render(<App />, document.getElementById('root'))