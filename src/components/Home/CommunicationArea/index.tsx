import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import './styles.scss'

import communication_bg_landscape from '../../../images/communication_bg_landscape.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBroadcastTower,
  faBezierCurve,
  faWallet,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons'

const CommunicationArea: React.StatelessComponent<{}> = () => {
  return (
    <div className="CommunicationArea">
      <ResponsiveImage className="communication_bg">
        <ResponsiveImageSize default minWidth={0} path={''} />
        <ResponsiveImageSize minWidth={992} path={communication_bg_landscape} />
      </ResponsiveImage>
      <div className="over_img_area">
        <div className="landscape_head_text">
          <div className="top_head">
            Communication <span className="color_red">you</span> own
          </div>
          <div className="top_content">
            Finally, the peace of mind to speak and act freely online. Our
            decentralized information and communication platform means nobody
            owns you. You choose who you want to connect with. You decide how
            much of yourself you want to share.
          </div>
        </div>
        <div className="box_area">
          <div className="left">
            <div className="box_content">
              <div className="text text-right">
                <div className="header">Communications</div>
                <div className="content">
                  Confidential voice, video
                  <br /> calling and messaging.
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
              <div className="icon_border">
                {' '}
                <FontAwesomeIcon
                  icon={faBezierCurve}
                  className="communication_icon"
                />
              </div>
              <div className="text">
                <div className="header">Connected Applications</div>
                <div className="content">
                  Instant access to other
                  <br /> privacy-focused applications.
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box_content text-right">
              <div className="text">
                <div className="header">Digital Wallet</div>
                <div className="content">
                  Securely store, send and manage
                  <br /> your digital assets and identity.{' '}
                </div>
              </div>{' '}
              <div className="icon_border">
                {' '}
                <FontAwesomeIcon
                  icon={faWallet}
                  className="communication_icon"
                />
              </div>
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
                  Privately manage your contacts
                  <br /> without a third-party.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunicationArea
