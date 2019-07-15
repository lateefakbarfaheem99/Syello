import * as React from 'react'
import { NavLink } from 'react-router-dom'

import LandingHeader from '../LandingHeader'
import LandingTop from '../LandingTop'
import LandingMiddle from '../LandingMiddle'
import LandingBottom from '../LandingBottom'

import './styles.scss'

const LandingPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="LandingPage">
      <LandingHeader />
      <LandingTop />
      <LandingMiddle />
      <LandingBottom />
    </div>
  )
}

export default LandingPage
