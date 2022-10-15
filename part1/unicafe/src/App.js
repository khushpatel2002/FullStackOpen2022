import { useState } from 'react'


const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({value}) => {
  return(
    <h1>
      {value}
    </h1>
  )
}

const StatisticLine = ({text,value}) => {
  return( 
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr> 
  )
}

const Statistics = ({good,neutral,bad}) =>{

  const all = good+bad+neutral

  const average = ((good-bad)/all)
  const positive = ((good/all)*100)
  if(all ===0){
    return(
      <div>No feedback given </div>
    )
  }
  return(
    <table>
       <tbody>
      <StatisticLine text="good" value={good}/> 
      <StatisticLine text="neutral" value={neutral}/> 
      <StatisticLine text="bad" value={bad}/> 
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value = {average}/>  
      <StatisticLine text="positive" value = {positive +" %"}/>  
      </tbody>
    </table> 
  )


}

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increseGood = () =>{
    setGood(good+1)
  }
  const increseBad = () =>{
    setBad(bad+1)
  }
  const increseNutral = () =>{
    setNeutral(neutral+1)
  }
  

  return (
    <div>
      <Display value="given feedback"/>
      <Button handleClick={increseGood} text="good"/>
      <Button handleClick={increseNutral} text="neutral"/>
      <Button handleClick={increseBad} text="bad"/>
      <Display value = "statistics"/>
      <Statistics good={good} neutral={neutral} bad = {bad}/>
    </div>
  )
}

export default App