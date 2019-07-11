import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import './styles.scss'

import difference_top_bg from '../../images/difference_top_bg.png'
import peer_to_peer from '../../images/peer_to_peer.png'
import get_app_btn from '../../images/get_app_btn.png'
import bullet from '../../images/bullet.png'

const TheDifferencePage: React.StatelessComponent<{}> = () => {
  return (
    <div className="TheDifferencePage">
      <div className="not_average">
        <div className="big_text">
          Not your average <span className="messenger">messenger</span>
        </div>
        <div className="content_area">
          <img src={difference_top_bg} className="difference_top_bg" />
          <div className="text">
            <div className="top_half">
              Sylo is a breath of fresh air in a world of intrusive
              <br className="line_break_mobile" /> advertising, data gathering
              and privacy
              <br className="line_break_mobile" />
              mis-management.
            </div>
            <div className="bottom_half">
              Other social platforms create value by breaching
              <br className="line_break_mobile" /> their users' privacy in order
              to reward the few.
              <br className="line_break_mobile" />
              <br className="line_break_landscape" />
              Our decentralised platform is privacy-first and
              <br className="line_break_mobile" /> powered by many to give you
              choice.
            </div>
          </div>
        </div>
      </div>
      <div className="decentralized">
        <div className="text">
          <div className="header">
            Decentralized
            <br />
            <span className="color_red">Messaging</span>
          </div>
          <div className="small_text_landscape">
            <div className="up_half">
              Sylo Messaging is a decentralized service that provides private
              <br className="line_break_landscape" />
              communication, but without the need for everyone to place
              <br className="line_break_landscape" /> their trust in one
              company.
            </div>
            <div className="down_half">
              It’s how online communication should be - provided by many
              <br className="line_break_landscape" /> parties so that there
              isn’t some tech-giant sitting in the
              <br className="line_break_landscape" /> background trying to make
              money out of our interactions.
            </div>
          </div>
        </div>
        <img src={peer_to_peer} className="phone" />
        <div className="small_text">
          <div className="up_half">
            Sylo Messaging is a decentralized service that
            <br className="line_break_mobile" /> provides private communication,
            but without the need
            <br className="line_break_mobile" /> for everyone to place their
            trust in one
            <br className="line_break_mobile" /> company.
          </div>
          <div className="down_half">
            It’s how online communication should be - provided
            <br className="line_break_mobile" /> by many parties so that there
            isn’t some tech-giant
            <br className="line_break_mobile" /> sitting in the background
            trying to make money out
            <br className="line_break_mobile" /> of our interactions.
          </div>
        </div>
      </div>
      <div className="storage">
        <div className="text">
          <div className="header">
            <span className="color_red">Decentralized</span>
            <br className="line_break_mobile" /> Storage{' '}
          </div>
          <div className="content">
            Sylo Storage is a decentralised network that allows users and
            applications to store content safely, without any reliance on a
            single company. Your data is kept private and cannot be used by
            third parties without your consent. <br />
            <br />
            Sylo Storage is currently provided by different companies in our
            ecosystem, The network will soon be opened to other storage
            providers, allowing anyone to contribute to the network in exchange
            for Sylo tokens.
          </div>
        </div>
        <ResponsiveImage className="storage_img">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={'/src/images/storage_mobile.png'}
          />
          <ResponsiveImageSize
            minWidth={576}
            path={'/src/images/storage.png'}
          />
        </ResponsiveImage>
      </div>
      <div className="token">
        <div className="text">
          <div className="header">
            The Sylo <span className="color_red">Token</span>{' '}
          </div>
          <div className="content">
            A Sylo token (SYLO) is a digital asset that you can purchase and use
            to fuel the Sylo App. You can think of them like credits you can
            spend in-app on things like:
          </div>
          <div className="features">
            <div className="feature_list">
              <div className="feature_item">
                <img src={bullet} />
                Paying for features{' '}
              </div>
              <div className="feature_item">
                <img src={bullet} />
                Sending value to contacts{' '}
              </div>
              <div className="feature_item">
                <img src={bullet} />
                Storing data in Sylo Storage
              </div>
            </div>
            <img src={get_app_btn} />
          </div>
        </div>
        <ResponsiveImage className="token_img">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={'/src/images/token_mobile.png'}
          />
          <ResponsiveImageSize minWidth={576} path={'/src/images/token.png'} />
        </ResponsiveImage>
      </div>
      <ResponsiveImage className="footer_adaptive_bg">
        <ResponsiveImageSize
          default
          minWidth={0}
          path={'/src/images/the_difference_footer_bg_mobile.png'}
        />
        <ResponsiveImageSize
          minWidth={576}
          path={'/src/images/the_difference_footer_bg.png'}
        />
      </ResponsiveImage>
    </div>
  )
}

export default TheDifferencePage
