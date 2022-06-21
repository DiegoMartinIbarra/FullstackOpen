import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [mostSelected, setMostSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  
  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  };

  const voteAnecdote = () => {
    const copyOfVotes = [ ...votes ]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)   

    let max_val = 0
    for (let i = 0; i < anecdotes.length; i++){
      if (copyOfVotes[i] >= max_val){
        max_val = copyOfVotes[i]
        setMostSelected(max_val)
      }
    }
    console.log(copyOfVotes.indexOf(max_val))

  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next Anecdote</button>
      <br/>
      Has {votes[selected]} Votes
      <h1>Anecdote with most votes</h1>
     {mostSelected === 0 ? <p> No votes yet </p> : props.anecdotes[votes.indexOf(mostSelected)]}
  </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(  <App anecdotes={anecdotes} />,  document.getElementById('root'))