import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Comedy from './Comedy'
import Horror from './Horror'
import Action from './Action'
import Family from './Family'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Comedy />
        <Horror />
        <Action />
        <Family />
      </div>
    )
  }
}

export default App
