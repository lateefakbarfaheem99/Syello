import * as React from 'react'
import DownloadWidget from '../DownloadWidget'

import './styles.scss'

export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <div className="Footer">
      <DownloadWidget />
    </div>
  )
}

export default Footer
