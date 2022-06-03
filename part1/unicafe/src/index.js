//Ejercicios 1.6 - 1.14
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={ () => setGood(good +1) }>good</button>
      <button onClick={ () => setNeutral(neutral +1) }>neutral</button>
      <button onClick={ () => setBad(bad +1) }>bad</button>
      <br/>
      <h1>statistics</h1>
      <Statistics positive = {good} equal = {neutral} negative = {bad} />
      
      <Button name={'good'} func={setGood} value={good} />
      <Button name={'neutral'} func={setNeutral} value={neutral} />
      <Button name={'bad'} func={setBad} value={bad} />
    </div>
  )
}

const setToValue = (func, newValue) => () => func(newValue)

const Button = ({func, value, name}) => {
  return (
      <button onClick={setToValue(func, value + 1)}>
          {name}
      </button>
  )
}

const Statistics = ({positive, equal, negative}) =>{

  const all = (positive + equal + negative)
  const aver =(positive - negative) / all
  const positiveAvg = Math.trunc((positive / all)*100)

if (all === 0)
  {return <p>No feedback given</p>}
else{
  return(
    <div>
      <table>
        <tbody>
          good {positive}
          <br/>
          neutral {equal}
          <br/>
          bad {negative}
          <br/>
          all {all}
          <br/>
          average {aver}
          <br/>
          positive {positiveAvg} %
        </tbody>  
      </table>
    </div>
    
    )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root'))