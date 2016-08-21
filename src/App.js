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
    return (
      <div className='App'>
        <Horror />

      </div>
    )
  }
}

export default App
