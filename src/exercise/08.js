// Controlled Forms

import React,{ useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add state here for the `username` using React.useState('')
  const [username,setUsername] = useState(null)
  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 this change is not required, but since we're controlling the username
    // state ourselves anyway, we know what the value is without having to
    // reach through the form's elements, so you can pass `username` here instead
    onSubmitUsername(username)
  }

  const handleChange = e => {
    setUsername(e.target.value.toLowerCase())
  }

  // 🐨 add an event handler here called `handleChange` which accepts the event
  // and calls setUsername with the lower case version of the input's value
  // 💰 event.target.value.toLowerCase()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange ={handleChange}
          id="usernameInput"
          type="text"
          value={username}
          // 🐨 add an onChange prop here and pass `handleChange`
          // 🐨 set the value here to the `username` state
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.info('username', username)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default Usage
