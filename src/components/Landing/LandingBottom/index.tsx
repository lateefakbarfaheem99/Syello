import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBroadcastTower,
  faBezierCurve,
  faWallet,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons'

import connect_fast_icon from '../../../images/connect_fast_icon.png'
import term_icon from '../../../images/term_icon.png'
import shield_icon from '../../../images/shield_icon.png'

import landing_foot_mobile from '../../../images/landing_foot_mobile.png'
import landing_foot_landscape from '../../../images/landing_foot_landscape.png'

import './styles.scss'
import '../../../styles/global.scss'

const LandingBottom: React.StatelessComponent<{}> = () => {
  return (
    <div className="LandingBottom">
      <div className="box_area">
        <div className="box_content">
          <div className="icon_border">
            {' '}
            <img src={connect_fast_icon} className="icon" />
          </div>
          <div className="text">
            <div className="header">Connect fast, connect free</div>
            <div className="content">
              Reliable messaging, voice and video calling.
            </div>
          </div>
        </div>
        <div className="box_content">
          <div className="icon_border">
            {' '}
            <img src={term_icon} className="icon" />
          </div>
          <div className="text">
            <div className="header">Use Sylo to talk on your terms</div>
            <div className="content">
              Experience confidentiality like never before.{' '}
            </div>
          </div>
        </div>
        <div className="box_content">
          <div className="icon_border">
            {' '}
            <img src={shield_icon} className="icon" />
          </div>
          <div className="text">
            <div className="header">Free from ads and big data</div>
            <div className="content">
              It’s private communication, kept private.
            </div>
          </div>
        </div>
      </div>
      <div className="pay_area">
        <div className="text">
          Pay who YOU want when <span className="color_red">YOU</span> want,
          Social <span className="color_red">payments</span> make life{' '}
          <span className="color_red">simple</span>
        </div>
        <ResponsiveImage className="landing_foot">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={landing_foot_mobile}
          />
          <ResponsiveImageSize minWidth={576} path={landing_foot_landscape} />
        </ResponsiveImage>
      </div>
    </div>
  )
}

export default LandingBottom
