import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Filter } from './components/Filter';
import { importCountries } from './services/services';

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

   let countries = [printData.map(countries => countries.name.common )];
   console.log(countries)

if( countries[0].length > 1  ){
  return (
    <div>
    <Filter filter={filter} handleFilter={handleFilter} />    
    {countries[0].map(idcountry => <p> {idcountry} </p>  )}
    </div>
  )} 

  else {
    return (
      <div>   <p>Loading...</p>  </div>
    )
    
  }
}
ReactDOM.render(<App />, document.getElementById('root'))