import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './NavBar.scss';
import blackCross from "../../assets/images/black-cross.png";



const NavBar = (props) => {
  const {
    toggleNav,
    fetchBeers,
    setNameText,
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
    <div className="nav">
      
        <img src={blackCross} alt="Close menu" className="nav__cross"  onClick={toggleNav}/>
      <div className="nav__container">
        <h2>SEARCH & FILTER</h2>
      <div className="nav__search">
        <Search 
          fetchBeers={fetchBeers} 
          setNameText={setNameText}
        />
      </div>  
        
      <div className="nav__filter">
      <Filter
          fetchBeers={fetchBeers}
          abvMin={abvMin}
          setAbvMin={setAbvMin}
          abvMax={abvMax}
          setAbvMax={setAbvMax}
          ibuMin={ibuMin}
          setIbuMin={setIbuMin}
          ibuMax={ibuMax}
          setIbuMax={setIbuMax}
          isClassic={isClassic}
          setIsClassic={setIsClassic}
        />
      </div>
        
      </div>
      <p className="note">ABV: Alcohol by volume</p>
      <p className="note">IBU: International Bittering Units</p>
    </div>
  )
}

export default NavBar
