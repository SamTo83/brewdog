import React from 'react';
import './Header.scss';
import brewDog from '../../assets/images/Brewdog.PNG';


const Header = () => {
  return (
    <div>
      <img src={brewDog} alt="Yellow Brew dog logo"  />
      <h1 className="subtitle">The Brewdog Catalogue</h1>
    </div>
  )
}

export default Header
