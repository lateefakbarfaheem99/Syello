import * as React from 'react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import { Animated } from 'react-animated-css';

import '../styles/global.scss';
import '../styles/contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import bg_mountain_front_mobile from '../images/bg_mountain_front_mobile.png';
import contact_bg_mobile from '../images/contact_bg_mobile.png';
import bottomHillLandscape from '../images/contact/bottomHillLandscape.png';

import buildings from '../images/contact/buildings.png';
import hill from '../images/contact/hill.png';
import watering_lady from '../images/contact/watering_lady.png';
import leftTree from '../images/contact/leftTree.png';
import rightTree from '../images/contact/rightTree.png';

export const Contact: React.StatelessComponent<{}> = () => {
  return (
    <div className="contact">
      <div className="container">
        <Animated
          animationIn="fadeIn_SliderUp"
          animationOut="fadeOut"
          animationInDelay={200}
          animationInDuration={1000}
          isVisible={true}
        >
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
        </Animated>
        <div className="social-area row justify-content-center mt-5">
          <div className="col">
            <div className="social-icons">
              <Animated
                animationIn="scale-up-center"
                animationOut="fadeOut"
                animationInDelay={500}
                animationInDuration={300}
                isVisible={true}
              >
                <div className="social-icon-border">
                  <a href="mailto:contact@sylo.io" target="_blank">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="social-icon"
                    />
                  </a>
                </div>
              </Animated>
              <Animated
                animationIn="scale-up-center"
                animationOut="fadeOut"
                animationInDelay={600}
                animationInDuration={300}
                isVisible={true}
              >
                <div className="social-icon-border">
                  <a href="https://twitter.com/sylo" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                  </a>
                </div>
              </Animated>
              <Animated
                animationIn="scale-up-center"
                animationOut="fadeOut"
                animationInDelay={700}
                animationInDuration={300}
                isVisible={true}
              >
                <div className="social-icon-border">
                  <a href="https://www.facebook.com/sylo.io" target="_blank">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="social-icon"
                    />
                  </a>
                </div>
              </Animated>
              <Animated
                animationIn="scale-up-center"
                animationOut="fadeOut"
                animationInDelay={800}
                animationInDuration={300}
                isVisible={true}
              >
                <div className="social-icon-border">
                  <a href="https://t.me/sylo_io" target="_blank">
                    <FontAwesomeIcon
                      icon={faTelegramPlane}
                      className="social-icon"
                    />
                  </a>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>

      <div className="animationArea">
        <Animated
          animationIn="contactBuildingAnimation"
          animationOut="fadeOut"
          animationInDelay={2000}
          animationInDuration={1000}
          isVisible={true}
          className="buildings"
        >
          <img src={buildings} />
        </Animated>
        <Animated
          animationIn="hillAnimation"
          animationOut="fadeOut"
          animationInDelay={2000}
          animationInDuration={1000}
          isVisible={true}
          className="hill"
        >
          <img src={hill} className="hill_img" />
        </Animated>

        <Animated
          animationIn="leftTreeAnimation"
          animationOut="fadeOut"
          animationInDelay={2000}
          animationInDuration={1000}
          isVisible={true}
          className="leftTree"
        >
          <img src={leftTree} />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={2000}
          animationInDuration={1000}
          isVisible={true}
          className="rightTree"
        >
          <img src={rightTree} />
        </Animated>
        <Animated
          animationIn="wateringLadyAnimation"
          animationOut="fadeOut"
          animationInDelay={2000}
          animationInDuration={1000}
          isVisible={true}
          className="lady"
        >
          <img src={watering_lady} className="lady_img" />
        </Animated>
        <ResponsiveImage className="bottomHill">
          <ResponsiveImageSize default minWidth={0} path={contact_bg_mobile} />
          <ResponsiveImageSize minWidth={576} path={bottomHillLandscape} />
        </ResponsiveImage>
      </div>
    </div>
  );
};
