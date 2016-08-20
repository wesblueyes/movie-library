import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Comedy from './Comedy'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Comedy />
      </div>
    )
  }
}

export default App
