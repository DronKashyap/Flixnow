import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../static/logo.png';
import user from '../static/user.png';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'navbar__black' : ''}`}>
      <img src={logo} className='logo' alt='Logo' />
      <img src={user} className='user'></img>
    </div>
  );
}

export default Navbar;
