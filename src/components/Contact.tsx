import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import '../styles/global.scss'
import '../styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons'

import lady_watering_plant from '../images/lady_watering_plant.png'
import bg_mountain_front_landscape from '../images/bg_mountain_front_landscape.png'
import bg_mountain_front_mobile from '../images/bg_mountain_front_mobile.png'

const small = bg_mountain_front_mobile
const large = bg_mountain_front_landscape

export const Contact: React.StatelessComponent<{}> = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="hear col col-lg-8 pt-5 mt-lg-5">
            We'd love to hear
            <br className="rwd-break" /> from <span className="you">you</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="touch col-8 pt-3 mt-3 mt-lg-3">
            Got something to say? We
            <br className="rwd-break" /> want to hear it all so get in
            <br className="rwd-break" /> touch.
          </div>
        </div>
        <div className="social-area row justify-content-center mt-5">
          <div className="col">
            <div className="social-icons">
              <div className="social-icon-border">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </div>
              <div className="social-icon-border">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </div>
              <div className="social-icon-border">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </div>
              <div className="social-icon-border">
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="social-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-area">
        <img src={lady_watering_plant} className="bg-lady" />
        <ResponsiveImage className="front_mountain">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={'/src/images/bg_mountain_front_mobile.png'}
          />
          <ResponsiveImageSize
            minWidth={768}
            path={'/src/images/bg_mountain_front_landscape.png'}
          />
        </ResponsiveImage>
      </div>
    </div>
  )
}
