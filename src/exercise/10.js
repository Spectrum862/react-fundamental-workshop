// useState: counter

// http://localhost:3000/isolated/exercise/10

import React,{useState} from 'react'

function Counter() {
  const [count,setCount] = useState(0)
  // 🐨 use React.useState here
  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.

  const onClick = () =>{
    setCount(count+1)
  }


return <button onClick={onClick}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
