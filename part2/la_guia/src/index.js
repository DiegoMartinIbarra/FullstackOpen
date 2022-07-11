//Ejercicios hasta el 1.6

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Names } from './components/Names';


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const newPersonObject = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    };

    setPersons(persons.concat(newPersonObject ))
    setNewName('')
  }

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map(persons => <Names key={persons.name} persons={persons} /> ) }
      ...
    </div>
  )}

ReactDOM.render(<App />, document.getElementById('root'))