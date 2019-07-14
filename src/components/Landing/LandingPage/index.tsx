import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap'
import LandingHeader from '../LandingHeader'

import logo from '../../../images/logo.png'
import get_app_btn from '../../../images/get_app_btn.png'
import './styles.scss'

const LandingPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="LandingPage">
      <LandingHeader />
    </div>
  )
}

export default LandingPage
