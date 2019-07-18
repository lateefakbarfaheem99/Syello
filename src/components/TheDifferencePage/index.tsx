import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import HoverImage from 'react-hover-image'
import ScrollAnimation from 'react-animate-on-scroll'

import './styles.scss'

import get_the_app_btn_normal from '../../images/get_the_app_btn_normal.png'
import get_the_app_btn_hover from '../../images/get_the_app_btn_hover.png'
import difference_top_bg from '../../images/difference_top_bg.png'
import peer_to_peer from '../../images/peer_to_peer.png'
import bullet from '../../images/bullet.png'

import storage_mobile from '../../images/storage_mobile.svg'
import storage_landscape from '../../images/storage_landscape.svg'
import storage_red_box from '../../images/storage_red_box.svg'
import storage_red_box_chain from '../../images/storage_red_box_chain.png'

import token_mobile from '../../images/token_mobile.png'
import token from '../../images/token.png'

import the_difference_footer_bg_mobile from '../../images/the_difference_footer_bg_mobile.png'
import the_difference_footer_bg from '../../images/the_difference_footer_bg.png'

import peer_to_peer_text from '../../images/peer_to_peer_text.svg'

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
        <div className="image_area">
          <ScrollAnimation
            animateIn="swing"
            delay={0}
            className="swing_animation"
          >
            <img src={peer_to_peer_text} className="peer_text" />
          </ScrollAnimation>
          <img src={peer_to_peer} className="phone" />
        </div>
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
        <ScrollAnimation
          animateIn="fadeIn_SlideDown"
          delay={0}
          className="text"
        >
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
        </ScrollAnimation>
        <div className="storage_img">
          <div className="image_capsule">
          <ResponsiveImage className="">
          <ResponsiveImageSize default minWidth={0} path={storage_mobile} />
          <ResponsiveImageSize minWidth={720} path={storage_landscape} />
        </ResponsiveImage>
        <ScrollAnimation
            animateIn="scale-up-center"
            delay={0}
            duration={1}
            className="storage_red_box"
          >

        <img src={storage_red_box}/>
        </ScrollAnimation>
        <ScrollAnimation
            animateIn="chain-animation"
            delay={1000}
            duration={1}
            className="storage_red_box_chain"
          >

         <img src={storage_red_box_chain} className=""/>
        </ScrollAnimation>

          </div>

        </div>
      </div>
      <div className="token">

        <div className="text">
      <ScrollAnimation
            animateIn="slideDown"
            duration={0.5}
            className=""
          >
          <div className="header">
            The Sylo <span className="color_red">Token</span>{' '}
          </div>
          <div className="content">
            A Sylo token (SYLO) is a digital asset that you can<br/> purchase and use
            to fuel the Sylo App. You can think of<br/> them like credits you can
            spend in-app on things like:
          </div>

        </ScrollAnimation>
          <div className="features">
            <div className="feature_list">
              <div className="feature_item">
                <img src={bullet} />
                <ScrollAnimation
                  animateIn="fadeIn"
                  duration={0.5}
                  className=""
                >
                  <span className="text">
                    Paying for features
                  </span>
                </ScrollAnimation>
              </div>
              <div className="feature_item">
              <ScrollAnimation
                  animateIn="scale-up-center"
                  delay={100}
                  duration={0.3}
                  className=""
                >
              <img src={bullet} />
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeIn"
                duration={0.5}
                className=""
              >
                <span className="text">
                  Sending value to contacts{' '}
                </span></ScrollAnimation>
              </div>
              <div className="feature_item">
              <ScrollAnimation
                  animateIn="scale-up-center"
                  delay={200}
                  duration={0.3}
                  className=""
                >
              <ScrollAnimation
                  animateIn="scale-up-center"
                  delay={300}
                  duration={0.3}
                  className=""
                >

                <img src={bullet} />
                </ScrollAnimation>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeIn"
                  duration={0.5}
                  className=""
                >

                <span className="text">
                  Storing data in Sylo Storage

                </span>
                </ScrollAnimation>
              </div>
            </div>
            <ScrollAnimation
                  animateIn="scale-up-center"
                  delay={400}
                  duration={0.3}
                  className="get_the_button_app_animation"
                >
            <HoverImage
              src={get_the_app_btn_normal}
              hoverSrc={get_the_app_btn_hover}
            />
            </ScrollAnimation>
          </div>
        </div>
        <ResponsiveImage className="token_img">
          <ResponsiveImageSize default minWidth={0} path={token_mobile} />
          <ResponsiveImageSize minWidth={720} path={token} />
        </ResponsiveImage>
      </div>
      <ResponsiveImage className="footer_adaptive_bg">
        <ResponsiveImageSize
          default
          minWidth={0}
          path={the_difference_footer_bg_mobile}
        />
        <ResponsiveImageSize minWidth={720} path={the_difference_footer_bg} />
      </ResponsiveImage>
    </div>
  )
}

export default TheDifferencePage
