import React, { Component } from 'react'

class Comedy extends Component {
render () {

return <div className='Comedy'>
<div class="genre"><a name="comedy"><h2>Comedy</h2></a></div>
<div class="content">
// get http://www.omdbapi.com/?t={movieName}&plot=short&r=json
// if "Genre" = "Comedy" or contains "Comedy"
//CreateElement Div
<div class="movie"><img src="{this.props.Poster}"></div>
<h3>{this.props.Title}</h3>
<p>{this.props.Year}, {this.props.Rated}</p>
<p>{this.props.Plot}</p>
<p>{this.props.Awards}</p>
</div>
}
}
export default Comedy
