import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import fetchJsonp from 'fetch-jsonp'
import emoji from 'node-emoji';
import SearchContainer from './searchContainer';
import ErrorMessage from './errorMessage';

/** Home Container component. Holds logic for calling the Itunes API and passing down the returned
  * JSON as props to the Search Container component.
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      url: "https://itunes.apple.com/search?media=music&term=",
      searchResults: [],
      type: 'all',
      errMessage: 'You haven\'t searched for anything yet.'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** handles changes in the input/search field */
  handleChange(e) {
    e.preventDefault;
    const inputType = e.target.tagName === 'INPUT' ? 'query' : 'type';
    const stateObject = {};
    stateObject[inputType] = e.target.value;
    this.setState(stateObject);
  }
  /** handles submission and calls itunes api with fetchJsonp module */
  handleSubmit() {
    if (this.state.query !== "") {
      const formattedQuery = this.state.query.trim().split(' ').join('+')
      const url = this.state.url + formattedQuery + '&enitity=' + this.state.type + '&limit=25';
      // make a JSONp request for the required information
      fetchJsonp(url)
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          if (json.resultCount === 0) {
            this.setState({errMessage: 'There were no results for that search :('})
          }
          //set state with the results
          this.setState({searchResults:json.results})
        }.bind(this)).catch(function(ex) {
          console.log('parsing failed', ex)
        })
    } else {
      this.setState({errMessage: 'You didn\'t enter a search query.'});
    }
  }

  render() {
    // Checks to see if content is ready to be loaded (i.e. call to the API has already been made.)
    const content = this.state.searchResults.length === 0
      ? <ErrorMessage message={this.state.errMessage}/>
      : <SearchContainer searchResults={ this.state.searchResults } />;

    return (
      <div className="home">
        <div className="search">
          <div className='labels'>
            <label className='search-label'>Search</label>
            <label className='limits-label'>In</label>
          </div>
          <input type="text" value={this.state.query} onChange={this.handleChange} placeholder='e.g. Jack Johnson'/>
          <select onChange={this.handleChange}>
            <option value="all" >All</option>
            <option value="musicTrack" >Songs</option>
            <option value="musicArtist" >Artists</option>
            <option value="album" >Albums</option>
          </select>
          <button type="submit" onClick={this.handleSubmit}>{emoji.get('mag')}</button>
        </div>
          {content}
      </div>
    );
  }
}

export default Home;