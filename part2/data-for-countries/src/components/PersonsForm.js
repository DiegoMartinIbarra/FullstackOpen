const PersonsForm = ({addPerson, newName, handleNewPerson, newNumber, handleNewNumber}) => {

    return (
           <>
           <h2>add a new</h2>
            <form onSubmit={addPerson}>
            <div> name: <input value={newName} onChange={handleNewPerson} /> </div>
            <div> number: <input value={newNumber} onChange={handleNewNumber} /> </div>
            <div> <button type="submit">add</button> </div>
            </form>
           </>
           )
  }
  
  export {PersonsForm};