import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Auth from '../../utils/auth';
import Container from 'react-bootstrap/Container';
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
<Navbar>
<Container>
  <Nav>
          {Auth.loggedIn() ? (
            <>
<Nav.Item className="ms-auto">
              <Nav.Link  to="/me">
                {Auth.getProfile().data.username}'s profile
              </Nav.Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
              </Nav.Item>
            </>
          ) : (
            <>
            <Nav.Item>
              <Nav.Link  to="/login">
                Login
              </Nav.Link>
              <Nav.Link  to="/signup">
                Signup
              </Nav.Link>
              </Nav.Item>
            </>
          )}
          </Nav>
           </Container>
</Navbar>
    </header>
  );
};

export default Header;
