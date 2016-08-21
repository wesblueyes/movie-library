import React, { Component } from 'react'

class Comedy extends Component {
  constructor () {
    super()
    this.state = {
      Poster: '',
      Title: '',
      Year: '',
      Rated: '',
      Plot: '',
      Awards: ''
    }
  }

  componentDidMount () {
    fetch(`http://www.omdbapi.com/?t=${this.props.movieTitle}&y=&plot=short&r=json`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          Poster: data.Poster,
          Title: data.Title,
          Year: data.Year,
          Rated: data.Rated,
          Plot: data.Plot,
          Awards: data.Awards
        })
      })
  }

  // get //http://www.omdbapi.com/?t={movieName}&plot=short&r=// json
  // if 'Genre' = 'Comedy' or contains 'Comedy'
  // CreateElement Div

  render () {
    return (
      <div className='Comedy'>
        <div className='Content'>
          <div className='Movie'>
            <img src={this.state.Poster} alt='Move Title'/>
          </div>
          <h3>{this.state.Title}</h3>
          <p className='meta'>{this.state.Year}, {this.state.Rated}</p>
          <p>{this.state.Plot}</p>
          <p className='meta'>{this.state.Awards}</p>
        </div>
      </div>
    )
  }
}

export default Comedy
