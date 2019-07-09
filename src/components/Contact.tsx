import * as React from 'react'
import '../styles/global.scss'
import '../styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const Contact: React.StatelessComponent<{}> = () => {
  return (
    <div className="container contact">
      <div className="row justify-content-center">
        <div className="col col-lg-8 hear pt-5 mt-lg-5">
          We'd love to hear
          <br className="rwd-break" /> from <span className="you">you</span>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 pt-3 mt-3 mt-lg-3">
          Got something to say? We
          <br className="rwd-break" /> want to hear it all so get in
          <br className="rwd-break" /> touch.
        </div>
      </div>
      <div className="social-area row justify-content-center">
        <div className="col-10">
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
