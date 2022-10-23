import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Auth from '../../utils/auth';

import './Nav.css';
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
     
      
          <Link  to="/">
            <h1 >Cold Cases and Unsolved Mysteries</h1>
          </Link>
          <p className='p-item'>Detective mind Thouhts.</p>

  <Nav>
          {Auth.loggedIn() ? (
            <>
<Nav.Item >
              <Link className='linkItem' to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              
              <a className='linkItem' href="/" onClick={logout}>
                Logout
              </a>
              </Nav.Item>
            </>
          ) : (
            <>
            <Nav.Item>
              <Link className='linkItem' to="/login">
                Login
              </Link>
              <Link className='linkItem' to="/signup">
                Signup
              </Link>
              </Nav.Item>
            </>
          )}
          </Nav>
 
    </header>
  );
};

export default Header;
