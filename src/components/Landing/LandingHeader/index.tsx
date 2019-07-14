import * as React from 'react'
import { NavLink } from 'react-router-dom'
import HoverImage from 'react-hover-image'

import logo from '../../../images/logo.png'
import download_ios_btn_normal from '../../../images/download_ios_btn_normal.png'
import download_ios_btn_hover from '../../../images/download_ios_btn_hover.png'

import download_android_btn_normal from '../../../images/download_android_btn_normal.png'
import download_android_btn_hover from '../../../images/download_android_btn_hover.png'

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import './styles.scss'

const LandingHeader: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <div className="LandingHeader row justify-content-md-center border-bottom">
        <Navbar className="col col-sm-9" expand="sm">
          <Navbar.Brand href="#">
            {' '}
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ml-sm-auto text-uppercase">
            <NavLink className="nav-link" to="/getTheApp">
              <HoverImage
                src={download_ios_btn_normal}
                hoverSrc={download_ios_btn_hover}
              />
            </NavLink>
            <NavLink className="nav-link" to="/getTheApp">
              <HoverImage
                src={download_android_btn_normal}
                hoverSrc={download_android_btn_hover}
              />
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}

export default LandingHeader
