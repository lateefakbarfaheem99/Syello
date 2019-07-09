import * as React from 'react'

import './styles.scss'
import download_sylo_with_particle from '../../images/download_sylo_with_particle.png'

const DownloadWidget: React.StatelessComponent<{}> = () => {
  return (
    <div className="DownloadWidget">
      <img src={download_sylo_with_particle} />
    </div>
  )
}

export default DownloadWidget
