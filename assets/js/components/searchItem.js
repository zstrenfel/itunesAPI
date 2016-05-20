import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

//Search item components --> each contains one returned element from the API.
function SearchItem({ element }) {
    return (
      <div className='search-item appear'>
        <section className="image">
          <img src={element.artworkUrl100} />
        </section>
        <section className="description">
          <h2>{element.trackName}</h2>
          <h3>{element.artistName}</h3>
          <h4>{element.collectionName}</h4>
          <a href={element.trackViewUrl}>View in Itunes</a>
        </section>
      </div>
    )
}

export default SearchItem;