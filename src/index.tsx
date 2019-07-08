import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppRouter } from './router'
import 'bootstrap/dist/css/bootstrap.css'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Raleway', 'sans-serif']
  }
})

ReactDOM.render(<AppRouter />, document.getElementById('root'))
