import React from 'react'
import emoji from 'node-emoji';

//basic error message to display if nothing has been searched
function ErrorMessage({ message }) {
  return (
    <div className="error appear">
      {emoji.get('new_moon_with_face')}
      <h3>{message}</h3>
    </div>
  )
}

export default ErrorMessage