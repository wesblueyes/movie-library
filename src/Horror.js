import React, { Component } from 'react'

class Horror extends Component {
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
      fetch(`http://www.omdbapi.com/?t=Child%27s+Play&y=&plot=short&r=json`)
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
  // if "Genre" = "Comedy" or contains "Comedy"
  // CreateElement Div

  render () {
    return (
      <div className='Horror'>
        <div className='Genre'><a name='horror'><h2>Horror</h2></a>
        </div>
        <div className='Content'>
          <div className='Movie'>
            <img src={this.state.Poster} alt='Move Title'/>
          </div>
          <h3>{this.state.Title}</h3>
          <p>{this.state.Year}, {this.state.Rated}</p>
          <p>{this.state.Plot}</p>
          <p>{this.state.Awards}</p>
        </div>
      </div>
    )
  }
}

export default Horror
