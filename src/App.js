import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Comedy from './Comedy'
import Horror from './Horror'
import Action from './Action'
import Family from './Family'
import 'whatwg-fetch'

class App extends Component {
  render () {
    const horrorTitles = ['Child%27s+Play', 'Scream', 'Dracula']
    const comedyTitles = ['The+Jerk', 'Blazing+Saddles', 'Airplane']
    const actionTitles = ['Deadpool', 'The+Expendables', 'Batman+Begins']
    const familyTitles = ['Toy+Story', 'The+Secret+Life+of+Pets', 'Up']
    return (
      <div className='App'>
        {horrorTitles.map((argument) =>
          <Horror movieTitle={argument}/>)}
        {comedyTitles.map((argument) =>
          <Comedy movieTitle={argument}/>)}
        {actionTitles.map((argument) =>
          <Action movieTitle={argument}/>)}
        {familyTitles.map((argument) =>
          <Family movieTitle={argument}/>)}
      </div>
    )
  }
}

export default App
