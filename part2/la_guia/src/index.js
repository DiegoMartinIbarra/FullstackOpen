import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Names } from './components/Names';


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 59898527668 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')


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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNewPerson} /> </div>
        <div> number: <input value={newNumber} onChange={handleNewNumber} /> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      { persons.map(persons => <Names key={persons.name} persons={persons} /> ) }
      ...
    </div>
  )}

ReactDOM.render(<App />, document.getElementById('root'))