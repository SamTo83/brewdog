import React from "react";
import './Card.scss';

const Card = props => {
  const { beer } = props;

  return (
    <div className="card__info">
      <div className="beer__container">
        <img className="beer__image" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer__header">
        <h3 className="beer__name">{beer.name}</h3>
        <h4 className="beer__info">ABV</h4>
        <h4 className="beer__info">IBU</h4>
        <p>{beer.tagline}</p>
        <p>{beer.abv}%</p>
        <p >{beer.ibu}%</p>
      </div>
      <p>{beer.description}</p>
      <h4 className="beer__info">First Brewed</h4>
      <p>{beer.first_brewed}</p>
    </div>
  );
};

export default Card;