import React, { Component } from 'react'

class Horror extends Component {

  // get //http://www.omdbapi.com/?t={movieName}&plot=short&r=// json
  // if "Genre" = "Comedy" or contains "Comedy"
  // CreateElement Div

  render () {
    return (
      <div className='Horror'>
        <div className='Genre'><a name='horror'><h2>Horror</h2></a>
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

export default Horror
