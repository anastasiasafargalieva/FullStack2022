import React from 'react'

const Header = (props) => {
  console.log(props)
  return <h1> { props.course} </h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  const parts=props.parts.map(item => {return <Part part={item}/>})
  console.log(parts)

  return( <div> {parts}
      </div>
  )
}

const Total = (props) => {
  let exercises_number= 0 ;
  props.parts.forEach( item => { exercises_number+=item.exercises});

  return <p> Number of exercises {exercises_number} </p>
}



const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts}  />
        <Total parts={course.parts} />
      </div>
  )
}

export default App