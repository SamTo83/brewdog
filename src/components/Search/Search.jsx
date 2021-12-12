import React from 'react';
import './Search.scss';

const Search = (props) => {
  return (
    <div>
      <input type="text" submit="submit"
        placeholder="Search by Name"
        className="searchInput"
        onChange={e => {
        props.setNameText(e.target.value);
        props.fetchBeers();}}>
      </input>
    </div>
  )
}

export default Search
