import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">FIAT</div>
      <nav className="navigation">
        <ul>
          <li><a >LANGUAGE</a></li>
          <li><a >MY FIAT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
