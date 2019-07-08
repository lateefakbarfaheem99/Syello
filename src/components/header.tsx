import * as React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import get_app_btn from '../images/get_app_btn.png'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import '../styles/global.scss'
export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="Header row justify-content-md-center">
      <Navbar className="col col-lg-8" expand="lg">
        <Navbar.Brand href="#home">
          {' '}
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-uppercase">
            <NavLink to="/" className="nav-link" activeClassName="active">
              The Difference
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeClassName="active">
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
            <img src={get_app_btn} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
