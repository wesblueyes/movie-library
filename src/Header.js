import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
    <nav>
      <ul>
        <li><a href='#comedy'>Comedy</a></li>
        <li><a href='#horror'>Horror</a></li>
        <li><a href='#action'>Action</a></li>
        <li><a href='#family'>Family</a></li>
        </ul>
    </nav>
  ) }
}

export default Header
