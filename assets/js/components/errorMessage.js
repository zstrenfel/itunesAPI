import React from 'react'
import emoji from 'node-emoji';

//basic error message to display if nothing has been searched
function ErrorMessage() {
  return (
    <div className="error">
      {emoji.get('new_moon_with_face')}
      <h3>You haven't searched for anything yet.</h3>
    </div>
  )
}

export default ErrorMessage