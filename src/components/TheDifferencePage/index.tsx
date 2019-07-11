import * as React from 'react'

import './styles.scss'

import difference_top_bg from '../../images/difference_top_bg.png'

const TheDifferencePage: React.StatelessComponent<{}> = () => {
  return (
    <div className="TheDifferencePage">
      <div className="not_average">
        <div className="big_text">
          Not your average <span className="messenger">messenger</span>
        </div>
        <div className="content_area">
          <img src={difference_top_bg} className="difference_top_bg" />
          <div className="text">
            <div className="top_half">
              Sylo is a breath of fresh air in a world of intrusive
              <br className="line_break_mobile" /> advertising, data gathering
              and privacy
              <br className="line_break_mobile" />
              mis-management.
            </div>
            <div className="bottom_half">
              Other social platforms create value by breaching
              <br className="line_break_mobile" /> their users' privacy in order
              to reward the few.
              <br className="line_break_mobile" />
              <br className="line_break_landscape" />
              Our decentralised platform is privacy-first and
              <br className="line_break_mobile" /> powered by many to give you
              choice.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheDifferencePage
