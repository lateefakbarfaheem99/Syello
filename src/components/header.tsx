import * as React from 'react'
import { NavLink } from 'react-router-dom'
import HoverImage from 'react-hover-image'

import get_the_app_btn_normal from '../images/get_the_app_btn_normal.png'
import get_the_app_btn_hover from '../images/get_the_app_btn_hover.png'

import logo from '../images/logo.png'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/global.scss'

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <div className="Header row justify-content-center border-bottom fixed-top">
        <Navbar className="col-10 col-sm-8" expand="sm">
          <Navbar.Brand href="#/">
            {' '}
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-sm-auto text-uppercase">
              <NavLink
                to="/difference"
                className="nav-link"
                activeClassName="active"
              >
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
              <NavLink className="nav-link" to="/">
                <HoverImage
                  src={get_the_app_btn_normal}
                  hoverSrc={get_the_app_btn_hover}
                />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}
