import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import '../styles/global.scss'
import '../styles/contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import bg_mountain_front_mobile from '../images/bg_mountain_front_mobile.png'
import contact_bg_mobile from '../images/contact_bg_mobile.png'
import contact_bg_landscape from '../images/contact_bg_landscape.png'

export const Contact: React.StatelessComponent<{}> = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="hear col col-lg-8 pt-5 mt-lg-5">
            We'd love to hear
            <br className="rwd-break" /> from
            {console.log(bg_mountain_front_mobile)}{' '}
            <span className="you">you</span>
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
                <a href="mailto:contact@sylo.io" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                </a>
              </div>
              <div className="social-icon-border">
                <a href="https://twitter.com/sylo" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
              </div>
              <div className="social-icon-border">
                <a href="https://www.facebook.com/sylo.io" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                </a>
              </div>
              <div className="social-icon-border">
                <a href="https://t.me/sylo_io" target="_blank">
                  <FontAwesomeIcon
                    icon={faTelegramPlane}
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveImage className="">
        <ResponsiveImageSize default minWidth={0} path={contact_bg_mobile} />
        <ResponsiveImageSize minWidth={576} path={contact_bg_landscape} />
      </ResponsiveImage>
    </div>
  )
}
