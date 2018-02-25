import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <pre>{preload.shows.map(show => <h3>{show.title}</h3>)}</pre>
  </div>
);

export default Search;
