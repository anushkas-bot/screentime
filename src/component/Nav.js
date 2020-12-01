import React from 'react';
import './New.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='navbar-tab'>
       <Link to='/about'>
        <li>About</li>
       </Link>
       <Link to='/contact'>
        <li>Contact</li>
       </Link>
       <Link to='/component'>
        <li>Component</li>
       </Link>
      </ul>
    </nav>
  );
}


export default Nav;
