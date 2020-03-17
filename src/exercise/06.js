// Basic Forms

import React,{useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the markdown file),
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  const textInput = useRef();
  const onSubmit = e =>{
    e.preventDefault()
    onSubmitUsername(textInput.current.value)
    // onSubmitUsername(e.target.elements.username.value)
  } 
  
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Username:</label>
        <input id="username"type="text" ref={textInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.info('username', username)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default Usage
