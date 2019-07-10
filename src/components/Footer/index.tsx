import * as React from 'react'
import DownloadWidget from '../DownloadWidget'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faMediumM,
  faTelegramPlane,
  faLinkedinIn,
  faYoutube,
  faRedditAlien,
  faBtc
} from '@fortawesome/free-brands-svg-icons'

import './styles.scss'

import gecko from '../../images/Gecko.png'
export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <div className="Footer">
      <div className="download-area">
        <ResponsiveImage className="front_mountain">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={'/src/images/bg_mountain_front_mobile.png'}
          />
          <ResponsiveImageSize
            minWidth={576}
            path={'/src/images/bg_mountain_front_landscape.png'}
          />
        </ResponsiveImage>
        <DownloadWidget />
      </div>
      <div className="bottom_line">
        <div className="gecko_area">
          <img src={gecko} />
          <span>Gecko Accredited</span>
        </div>
        <div className="introduction_text_area">
          <span>Whitepaper</span>
          <span>Media</span>
          <span>Our Team</span>
        </div>
        <div className="social_icon_area">
          <div className="up">
            <FontAwesomeIcon icon={faTwitter} className="social_icon" />
            <FontAwesomeIcon icon={faFacebookF} className="social_icon" />
            <FontAwesomeIcon icon={faMediumM} className="social_icon" />
            <FontAwesomeIcon icon={faLinkedinIn} className="social_icon" />
          </div>
          <div className="down">
            <FontAwesomeIcon icon={faYoutube} className="social_icon" />
            <FontAwesomeIcon icon={faTelegramPlane} className="social_icon" />
            <FontAwesomeIcon icon={faRedditAlien} className="social_icon" />
            <FontAwesomeIcon icon={faBtc} className="social_icon" />
          </div>
        </div>
        <div className="privacy_area">
          <span>Privacy Policy</span>
          <span>© Sylo</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
