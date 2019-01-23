import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../css/style.css';

const MenuNavbar = () => ( // The variable should be a return function...
  
  <Navbar inverse fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">NYTBerita</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/article">Article</NavItem>
        <NavItem eventKey={3} href="/books">Books</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MenuNavbar;