import React, { Component } from 'react'

class Family extends Component {
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

  render () {
    return (
      <div className='Family'>
        <div className='Genre'><a name='family'><h2>Family</h2></a>
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

export default Family
