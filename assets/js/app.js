import React from 'react'
import { render } from 'react-dom'
import emoji from 'node-emoji'

/** container component for application. Also contains logic for header and footer elements  */
class App extends React.Component {
  render() {
    console.log(emoji.get('eggplant'),emoji.get('eggplant'),emoji.get('eggplant'));
    const displayStyles = {display: 'inline-block'};
    return (
      <div className='content'>
      <header>
        {emoji.get('notes')}  <h1 style={displayStyles}>Itunes Music Search</h1>  {emoji.get('notes')}
      </header>
        {this.props.children}
      <footer className='final'>
        Made by <a href='http://zstrenfel.com'>Zach.</a> {emoji.get('coffee')}
      </footer>
      </div>
    )
  }
}

export default App