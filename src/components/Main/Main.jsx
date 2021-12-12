import React from 'react';
import './Main.scss';
import Card from '../Card/Card';

const Main = (props) => {

  const beerResult = (beer) => <Card key={beer.id} beer={beer}/>

  return (
    props.beers ?

    <div>
      <h2 className="beer__results">Your BrewDog Results</h2>
      {props.beers.map((beer) => beerResult(beer))}
    </div>

    : null
  )
}

export default Main
