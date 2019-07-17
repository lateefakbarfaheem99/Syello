import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import { Header, About, Footer, Contact } from './components'
import TheDifferencePage from './components/TheDifferencePage'
import HomePage from './components/Home/HomePage'
import LandingPage from './components/Landing/LandingPage'

const routes = [
  { path: '/', exact: true, is_head_neccessary: false, main: LandingPage },
  { path: '/home', exact: true, is_head_neccessary: true, main: HomePage },
  {
    path: '/difference',
    exact: true,
    is_head_neccessary: true,
    main: TheDifferencePage
  },
  { path: '/contact', exact: true, is_head_neccessary: true, main: Contact }
]

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <ParallaxProvider>
      <HashRouter>
        <div className="">
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.is_head_neccessary ? () => <Header /> : null}
              />
            ))}
            <Route component={Header} />
          </Switch>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            <Route component={HomePage} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </ParallaxProvider>
  )
}
