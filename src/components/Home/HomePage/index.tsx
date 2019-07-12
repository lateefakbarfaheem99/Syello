import * as React from 'react'
import StayArea from '../StayArea'
import CommunicationArea from '../CommunicationArea'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import './styles.scss'

import home_watching_mobile from '../../../images/home_watching_mobile.png'
import home_watching_landscape from '../../../images/home_watching_landscape.png'

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
    </div>
  )
}

export default HomePage
