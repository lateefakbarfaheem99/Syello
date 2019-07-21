import * as React from 'react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import HoverImage from 'react-hover-image';
import { Animated } from 'react-animated-css';

import './styles.scss';
import get_the_app_home_normal from '../../../images/get_the_app_home_normal.png';
import get_the_app_home_hover from '../../../images/get_the_app_home_hover.png';

import watch_the_video_btn_normal from '../../../images/watch_the_video_btn_normal.png';
import watch_the_video_btn_hover from '../../../images/watch_the_video_btn_hover.png';

import home_top_stay_bg_mobile from '../../../images/home_top_stay_bg_mobile.png';
import home_top_stay_bg_landscape from '../../../images/home_top_stay_bg_landscape.png';

//Animation Area Images
import backPhone from '../../../images/homeTop/backPhone.png';
import bottom from '../../../images/homeTop/bottom.png';

import frontPhone from '../../../images/homeTop/frontPhone.png';
import lady from '../../../images/homeTop/lady.png';

import leftTree from '../../../images/homeTop/leftTree.png';
import man from '../../../images/homeTop/man.png';
import middle from '../../../images/homeTop/middle.png';
import rightTree from '../../../images/homeTop/rightTree.png';

import top from '../../../images/homeTop/top.png';

const StayArea: React.StatelessComponent<{}> = () => {
  return (
    <div className="StayArea">
      <div className="mobile_case">
        <div className="header">
          The tech that helps you <span className="color_red">stay</span> you
        </div>
        <ResponsiveImage className="stay_img">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={home_top_stay_bg_mobile}
          />
          <ResponsiveImageSize
            minWidth={576}
            path={home_top_stay_bg_landscape}
          />
        </ResponsiveImage>
        <div className="content">
          Sylo is a decentralized platform focused on secure communication and
          social FinTech. Through decentralization, we’re not just challenging
          the status quo – we’re turning it on its head.
        </div>
        <div className="button_area">
          <HoverImage
            src={get_the_app_home_normal}
            hoverSrc={get_the_app_home_hover}
          />
          <HoverImage
            src={watch_the_video_btn_normal}
            hoverSrc={watch_the_video_btn_hover}
          />
        </div>
      </div>
      <div className="landscape_case">
        <div className="animationArea">
          <Animated
            animationIn="slideInUp15"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1500}
            isVisible={true}
            className="middleTerrain"
          >
            <img src={top} className="topTerrain" />
          </Animated>
          <Animated
            animationIn="slideInUp15"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1000}
            isVisible={true}
            className="middleTerrain"
          >
            <img src={middle} />
          </Animated>

          <img src={bottom} className="bottomTerrain" />
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1000}
            isVisible={true}
            className="leftTree"
          >
            <img src={leftTree} className="" />
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1000}
            isVisible={true}
            className="rightTree"
          >
            <img src={rightTree} className="" />
          </Animated>
          <Animated
            animationIn="ladyAppear"
            animationOut="fadeOut"
            animationInDelay={3500}
            animationInDuration={500}
            isVisible={true}
            className="lady"
          >
            <img src={lady} className="" />
          </Animated>
          <Animated
            animationIn="manAppear"
            animationOut="fadeOut"
            animationInDelay={3500}
            animationInDuration={500}
            isVisible={true}
            className="man"
          >
            <img src={man} className="" />
          </Animated>
          <Animated
            animationIn="slideUpAndDown10"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1000}
            isVisible={true}
            className="backPhone"
          >
            <img src={backPhone} className="" />
          </Animated>
          <Animated
            animationIn="slideUpAndDown5"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1000}
            isVisible={true}
            className="frontPhone"
          >
            <img src={frontPhone} className="" />
          </Animated>
        </div>
        <div className="text_area">
          <Animated
            animationIn="fadeInAndSlideUp"
            animationOut="fadeOut"
            animationInDelay={1000}
            animationInDuration={1000}
            isVisible={true}
            className=""
          >
            <div className="header">
              The tech that helps
              <br /> you <span className="color_red">stay</span> you
            </div>
            <div className="content">
              Sylo is a decentralized platform focused on secure communication
              and social FinTech. Through decentralization, we’re not just
              challenging the status quo – we’re turning it on its head.
            </div>
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDelay={2000}
            animationInDuration={1000}
            isVisible={true}
            className=""
          >
            <div className="button_area">
              <HoverImage
                src={get_the_app_home_normal}
                hoverSrc={get_the_app_home_hover}
              />
              <HoverImage
                src={watch_the_video_btn_normal}
                hoverSrc={watch_the_video_btn_hover}
              />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default StayArea;
