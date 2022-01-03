import {React, useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import {FaBeer} from 'react-icons/fa';

export const App = () => {
  const [beers, setBeers] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [nameText, setNameText] = useState();
  const [abvMin, setAbvMin] = useState(0);
  const [abvMax, setAbvMax] = useState(10);
  const [ibuMin, setIbuMin] = useState(0);
  const [ibuMax, setIbuMax] = useState(200);
  const [isClassic, setIsClassic] = useState(false);

  const fetchBeers = () => {
    const nameStr = nameText ? `&beer_name=${nameText}` : "";
    const abvMinStr = `&abv_gt=${abvMin}`;
    const abvMaxStr = `&abv_lt=${abvMax}`;
    const ibuMinStr = `&ibu_gt=${ibuMin}`;
    const ibuMaxStr = `&ibu_lt=${ibuMax}`;
    const isClassicStr = isClassic ? `&brewed_before=01-2011` : "";

    
    const url = `https://api.punkapi.com/v2/beers?per_page=80${nameStr}${abvMinStr}${abvMaxStr}${ibuMinStr}${ibuMaxStr}${isClassicStr}`
    fetch(url)
    .then((response) => response.json())
    .then(data => setBeers(data));
  }

  useEffect(() => {
    fetchBeers();
  }, []);
  
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <Header/>
      <div>
        <div className="beer__title">
          <FaBeer className="Beer" onClick={toggleNav}/><p>Click the beer to Search and Filter</p>
        </div>
      {showNav && 
        <NavBar
          fetchBeers={fetchBeers}
          setNameText={setNameText}
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
          toggleNav={toggleNav} 
          />}
        <Main beers={beers}/>
      </div>
    </div>
  )
}

export default App;