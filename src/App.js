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
    const horrorTitles = ['Child%27s+Play', 'Scream', 'Dracula', 'Saw']
    const comedyTitles = ['The+Jerk', 'Blazing+Saddles', 'Airplane', 'Superbad']
    const actionTitles = ['Deadpool', 'The+Expendables', 'Batman+Begins', 'The+Fast+And+The+Furious']
    const familyTitles = ['Toy+Story', 'The+Secret+Life+of+Pets', 'Up', 'Spirited+Away']
    return (
      <div className='App'>
      <div className='fixed'>
      <div className='top-nav'>
      <h1>Movie</h1><img src='http://gallerywrappeddesign.com/wp-content/uploads/2016/08/movie-icon.png'/><h1>Library</h1>
      </div>
      <Header />
      </div>
      <div className='body'>
      <div className='Genre'><a className='anchor' name='horror'><h2>Horror</h2></a></div>
      <div className='Container'>{horrorTitles.map((argument) =>
          <Horror movieTitle={argument}/>)}</div>
          <div className='Genre'><a className='anchor' name='comedy'><h2>Comedy</h2></a></div>
      <div className='Container'> {comedyTitles.map((argument) =>
          <Comedy movieTitle={argument}/>)}</div>
          <div className='Genre'><a className='anchor' name='action'><h2>Action</h2></a></div>
      <div className='Container'>{actionTitles.map((argument) =>
          <Action movieTitle={argument}/>)}</div>
          <div className='Genre'><a className='anchor' name='family'><h2>Family</h2></a></div>
      <div className='Container'>{familyTitles.map((argument) =>
          <Family movieTitle={argument}/>)}</div>
      </div>
      </div>
    )
  }
}

export default App
