import React, { useState } from 'react'

const Button = (props) => {
  return <button  onClick={props.handleClick} >{props.text}</button>
}

const StatisticLine=  (props) => {
     const   [text ,value] = [props.text, props.value]
    return  <tr><td>{text}</td><td>{value}</td></tr>

}

const Statistics= (props) =>  {
    const [good,bad,neutral,total]= [...props.feedbacks]
        if(total===0) return <p>No feedback given</p>
else
    return ( <div>
            <table>
                <tbody>
            <StatisticLine text={"Good"} value={good}/>
            <StatisticLine text={"Neutral"} value={neutral}/>
            <StatisticLine text={"Bad"} value={bad}/>
            <StatisticLine text={"All"} value={total}/>
            <StatisticLine text={"Average"} value={(good-bad)/total}/>
            <StatisticLine text={"Positive"} value={ `${good/total*100}%`}/>
            </tbody>
            </table>
            </div>
            )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    const [total,setTotal]= useState(0);

  const goodHandler= () => {
    setGood(good+1) ;
    setTotal(total+1);
  }

  const neutralHandler= () => {
    setNeutral(neutral+1) ;
    setTotal(total+1);
  }

  const badHandler= () => {
    setBad(bad+1) ;
    setTotal(total+1);
  }
  return (
      <div>
        <h2>Give Feedback</h2>

        <Button text={"Good"} handleClick={ goodHandler}/>
        <Button text={"Neutral"} handleClick={ neutralHandler}/>
        <Button text={"Bad"} handleClick={ badHandler}/>
                      <h2>Statistics</h2>
        <Statistics feedbacks={[good,bad,neutral, total]}/>



      </div>
  )
}

export default App