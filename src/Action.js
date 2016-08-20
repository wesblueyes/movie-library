import React, { Component } from 'react'

class Action extends Component {

  // get //http://www.omdbapi.com/?t={movieName}&plot=short&r=// json
  // if "Genre" = "Comedy" or contains "Comedy"
  // CreateElement Div

  render () {
    return (
      <div className='Action'>
        <div className='Genre'><a name='action'><h2>Action</h2></a>
        </div>
        <div className='Content'>
          <div className='Movie'>
            <img src={this.props.Poster} alt='Move Title'/>
          </div>
          <h3>{this.props.Title}</h3>
          <p>{this.props.Year}, {this.props.Rated}</p>
          <p>{this.props.Plot}</p>
          <p>{this.props.Awards}</p>
        </div>
      </div>
    )
  }
}

export default Action
