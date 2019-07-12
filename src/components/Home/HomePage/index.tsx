import * as React from 'react'
import StayArea from '../StayArea'
import CommunicationArea from '../CommunicationArea'
import './styles.scss'

const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <div className="HomePage">
      <StayArea />
      <CommunicationArea />
    </div>
  )
}

export default HomePage
