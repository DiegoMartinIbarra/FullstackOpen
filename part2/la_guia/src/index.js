import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Names } from './components/Names';


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')
  
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
      <div> filter shown with <input value={filter} onChange={handleFilter} /> </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNewPerson} /> </div>
        <div> number: <input value={newNumber} onChange={handleNewNumber} /> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      { filter.length === 0 ? persons.map(persons => <Names key={persons.name} persons={persons} />) :  printName.map(persons => <Names key={persons.name} persons={persons} />)}
      ...
    </div>
  )}

ReactDOM.render(<App />, document.getElementById('root'))