import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { App } from './app'
import { Header, About, Footer, Contact } from './components'
import TheDifferencePage from './components/TheDifferencePage'
import HomePage from './components/Home/HomePage'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/theDifference" component={TheDifferencePage} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  )
}
