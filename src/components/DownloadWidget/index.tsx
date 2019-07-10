import * as React from 'react'

import './styles.scss'
import download_sylo_with_particle from '../../images/download_sylo_with_particle.png'
import apple_app_store from '../../images/apple_app_store.png'
import google_play_store from '../../images/google_play.png'
const DownloadWidget: React.StatelessComponent<{}> = () => {
  return (
    <div className="DownloadWidget">
      <div className="caption">
        <img src={download_sylo_with_particle} className="" />
      </div>
      <div className="container">
        <div className="stores">
          <img src={google_play_store} />
          <img src={apple_app_store} />
        </div>
      </div>
    </div>
  )
}

export default DownloadWidget
