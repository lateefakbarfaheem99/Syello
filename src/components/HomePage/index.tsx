import * as React from 'react'

import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import './styles.scss'

import home_get_the_app from '../../images/home_get_the_app.png'
import watch_the_video_btn from '../../images/watch_the_video_btn.png'
import home_top_stay_bg_landscape from '../../images/home_top_stay_bg_landscape.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBroadcastTower,
  faBezierCurve,
  faWallet,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons'

const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <div className="HomePage">
      <div className="stay_area">
        <div className="mobile_case">
          <div className="header">
            The tech that helps you <span className="color_red">stay</span> you
          </div>
          <ResponsiveImage className="stay_img">
            <ResponsiveImageSize
              default
              minWidth={0}
              path={'/src/images/home_top_stay_bg_mobile.png'}
            />
            <ResponsiveImageSize
              minWidth={576}
              path={'/src/images/home_top_stay_bg_landscape.png'}
            />
          </ResponsiveImage>

          <div className="content">
            Sylo is a decentralized platform focused on secure communication and
            social FinTech. Through decentralization, we’re not just challenging
            the status quo – we’re turning it on its head.
          </div>
          <div className="button_area">
            <img src={home_get_the_app} />
            <img src={watch_the_video_btn} />
          </div>
        </div>
        <div className="landscape_case">
          <img src={home_top_stay_bg_landscape} className="bg" />
          <div className="text_area">
            <div className="header">
              The tech that helps
              <br /> you <span className="color_red">stay</span> you
            </div>
            <div className="content">
              Sylo is a decentralized platform focused on secure communication
              and social FinTech. Through decentralization, we’re not just
              challenging the status quo – we’re turning it on its head.
            </div>
            <div className="button_area">
              <img src={home_get_the_app} />
              <img src={watch_the_video_btn} />
            </div>
          </div>
        </div>
      </div>
      <div className="communication_area">
        <ResponsiveImage className="communication_bg">
          <ResponsiveImageSize default minWidth={0} path={''} />
          <ResponsiveImageSize
            minWidth={576}
            path={'/src/images/communication_bg_landscape.png'}
          />
        </ResponsiveImage>
        <div className="box_area">
          <div className="left">
            <div className="box_content">
              <div className="text text-right">
                <div className="header">Communications</div>
                <div className="content">
                  Confidential voice, video calling and messaging.
                </div>
              </div>
              <div className="icon_border">
                {' '}
                <FontAwesomeIcon
                  icon={faBroadcastTower}
                  className="communication_icon"
                />
              </div>
            </div>
            <div className="box_content">
              <div className="text">
                <div className="header">Connected Applications</div>
                <div className="content">
                  Instant access to other privacy-focused applications.
                </div>
              </div>
              <div className="icon_border">
                {' '}
                <FontAwesomeIcon
                  icon={faBezierCurve}
                  className="communication_icon"
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box_content">
              <div className="icon_border">
                {' '}
                <FontAwesomeIcon
                  icon={faWallet}
                  className="communication_icon"
                />
              </div>
              <div className="text text-right">
                <div className="header">Digital Wallet</div>
                <div className="content">
                  Securely store, send and manage your digital assets and
                  identity.{' '}
                </div>
              </div>{' '}
            </div>
            <div className="box_content">
              <div className="icon_border">
                {' '}
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="communication_icon"
                />
              </div>

              <div className="text">
                <div className="header">Address Book</div>
                <div className="content">
                  Privately manage your contacts without a third-party.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
