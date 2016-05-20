import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router';
import SearchItem from './searchItem'

//Search Container stateless component. Controls the creation of search results list.
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let timer = 0;
    const searchItems = this.props.searchResults.map((item) => {
      timer += 200;
      const key = item.trackName + item.trackId;
      return <SearchItem element={item} timer={timer} key={key}/>
    })
    return (
      <div className="search-results" >
        {searchItems}
      </div>
    )
  }
}

export default SearchContainer;