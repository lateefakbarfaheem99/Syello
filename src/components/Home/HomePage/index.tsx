import * as React from 'react'
import StayArea from '../StayArea'
import CommunicationArea from '../CommunicationArea'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import './styles.scss'

import home_watching_mobile from '../../../images/home_watching_mobile.png'
import home_watching_landscape from '../../../images/home_watching_landscape.png'

import identity_home_mobile from '../../../images/identity_home_mobile.png'
import identity_home_landscape from '../../../images/identity_home_landscape.png'

import choice_home_mobile from '../../../images/choice_home_mobile.png'
import choice_home_landscape from '../../../images/choice_home_landscape.png'

const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <div className="HomePage">
      <StayArea />
      <CommunicationArea />
      <div className="watching_area">
        <div className="text">
          <div className="heading">
            Type like <span className="color_red">no</span> one’s watching...
          </div>
          <div className="content">
            Because no one is. Communicate with the freedom you have when you
            are talking face to face, safe in the knowledge that your
            communications will remain confidential.
          </div>
        </div>
        <ResponsiveImage className="watching_img">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={home_watching_mobile}
          />
          <ResponsiveImageSize minWidth={576} path={home_watching_landscape} />
        </ResponsiveImage>
      </div>
      <div className="identity_area">
        <div className="text">
          <div className="heading">
            Own <span className="color_red">your</span> identity
          </div>
          <div className="content">
            Reclaim control of your digital identity. You choose what personal
            information you share with who and on what terms. Sylo's default
            setting is complete privacy. Everything else is up to you.
          </div>
        </div>
        <ResponsiveImage className="identity_img">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={identity_home_mobile}
          />
          <ResponsiveImageSize minWidth={576} path={identity_home_landscape} />
        </ResponsiveImage>
      </div>
      <div className="choice_area">
        <ResponsiveImage className="choice_img">
          <ResponsiveImageSize default minWidth={0} path={choice_home_mobile} />
          <ResponsiveImageSize minWidth={576} path={choice_home_landscape} />
        </ResponsiveImage>
        <div className="over_img">
          <div className="text_container">
            <div className="heading">It's your choice</div>
            <div className="why_btn">Why Sylo?</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
