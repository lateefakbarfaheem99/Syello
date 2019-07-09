import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { App } from './app'
import { About, MembersPage, Contact } from './components'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  )
}
