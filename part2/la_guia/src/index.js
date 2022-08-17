import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Names } from './components/Names';
import { PersonsForm } from './components/PersonsForm';
import { Filter } from './components/Filter';

const App = () => {

  const [ persons, setPersons ] = useState([])  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()

    const newPersonObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    };

        //Control that person doesnt exist before
        const existingPerson = persons.find(person => person.name === newPersonObject.name);

        if(!existingPerson){
          setPersons(persons.concat(newPersonObject))
          setNewName('')
          setNewNumber('')
        }
        else{
          alert('Error '+existingPerson.name+' alredy exists in the numbers.')
        }

  }

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const serchfilter = (element) => {
    var resultElements = persons.filter((persons) =>{
      if(persons.name.toString().toLowerCase().includes(element.toLowerCase()) ){
        return persons;
      }
    });
    return resultElements;
  }

  let printName = serchfilter(filter);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />      
      <PersonsForm addPerson={addPerson} newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber}  />
      <h2>Numbers</h2>
      { filter.length === 0 ? persons.map(persons => <Names key={persons.name} persons={persons} />) :  printName.map(persons => <Names key={persons.name} persons={persons} />)}
      ...
    </div>
  )}

ReactDOM.render(<App />, document.getElementById('root'))