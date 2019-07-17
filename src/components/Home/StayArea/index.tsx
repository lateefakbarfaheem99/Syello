import * as React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import HoverImage from 'react-hover-image'

import './styles.scss'
import get_the_app_home_normal from '../../../images/get_the_app_home_normal.png'
import get_the_app_home_hover from '../../../images/get_the_app_home_hover.png'

import watch_the_video_btn_normal from '../../../images/watch_the_video_btn_normal.png'
import watch_the_video_btn_hover from '../../../images/watch_the_video_btn_hover.png'

import home_top_stay_bg_mobile from '../../../images/home_top_stay_bg_mobile.png'
import home_top_stay_bg_landscape from '../../../images/home_top_stay_bg_landscape.png'

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
        <img src={home_top_stay_bg_landscape} className="bg" />
        <div className="text_area">
          <div className="header">
            The tech that helps
            <br /> you <span className="color_red">stay</span> you
          </div>
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
      </div>
    </div>
  )
}

export default StayArea
