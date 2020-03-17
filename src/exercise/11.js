// useCounter: custom hooks

// http://localhost:3000/isolated/exercise/11

import React from 'react'

// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions

function useCounter(initialCount = 0){
  const [count, setCount] = React.useState(initialCount)
  const handleChange = event => setCount(event.target.value++)
  // you can return anything you want to here. We're returning an array
  // which is similar to the useState API.
  return [count, handleChange]
}


function Counter() {
  // 💣 remove this (or move it to your custom hook)
  const [count, handleChange] = useCounter()
  // 🐨 Use your custom useCounter hook to get `count` and `increment`
  return <button onClick={handleChange}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
