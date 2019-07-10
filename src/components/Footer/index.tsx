import * as React from 'react'
import DownloadWidget from '../DownloadWidget'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

import './styles.scss'

import gecko from '../../images/Gecko.png'
export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <div className="Footer">
      <div className="download-area">
        <ResponsiveImage className="front_mountain">
          <ResponsiveImageSize
            default
            minWidth={0}
            path={'/src/images/bg_mountain_front_mobile.png'}
          />
          <ResponsiveImageSize
            minWidth={576}
            path={'/src/images/bg_mountain_front_landscape.png'}
          />
        </ResponsiveImage>
        <DownloadWidget />
      </div>

      <div className="bottom_line">{/* <img src={gecko} /> */}</div>
    </div>
  )
}

export default Footer
