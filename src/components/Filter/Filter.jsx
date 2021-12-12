import React from 'react';
import './Filter.scss';

const Filter = (props) => {
  const {
    fetchBeers,
    abvMin,
    setAbvMin,
    abvMax,
    setAbvMax,
    ibuMin,
    setIbuMin,
    ibuMax,
    setIbuMax,
    isClassic,
    setIsClassic
  } = props;

  return (
    <div className="filter__section">
      
      <div className="filter__container">
        <label>ABV Min:</label>
        <label className="slider">{abvMin}%</label>
        <input
          type="range"
          id="abvMin"
          min="0"
          max={abvMax}
          value={abvMin}
          onInput={event => {
            setAbvMin(event.target.value);
            fetchBeers();
            }
          }>
        </input>
      </div>
      <div className="filter__container">
        <label>ABV Max:</label>
        <label className="slider">{abvMax}%</label>
        <input
          type="range"
          id="abvMax"
          min={abvMin}
          max="10"
          step="0.1"
          value={abvMax}
          onInput={event => {
            setAbvMax(event.target.value);
            fetchBeers();
            }
          }>
        </input>
      </div>
      <div className="filter__container">
        <label>IBU Min :</label>
        <label className="slider">{ibuMin}%</label>
        <input
          type="range"
          id="ibuMin"
          step="1"
          min="0"
          max={ibuMax}
          value={ibuMin}
          onInput={event => {
            setIbuMin(event.target.value);
            fetchBeers();
            }
          }>
        </input>
      </div>
      <div className="filter__container">
        <label>IBU Max :</label>
        <label className="slider">{ibuMax}%</label>
        <input
          type="range"
          id="ibuMax"
          min={ibuMin}
          max="100"
          step="1"
          value={ibuMax}
          onInput={event => {
            setIbuMax(event.target.value);
            fetchBeers();
            }
          }>
        </input>
      </div>
      <div className="filter__container">
        <label>Classic :</label>
        <label>{`< 2011`}</label>
        <input
          type="checkbox"
          id="isClassic"
          onChange={() => {
            setIsClassic(!isClassic)
            fetchBeers();
            }
          }>
        </input>
      </div>
      
    </div>
  )
}

export default Filter
