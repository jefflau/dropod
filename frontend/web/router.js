// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncParams } from 'react-router-redux-params'

import store from './store'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Layout from './components/layouts/MainLayout'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/podcast/:id" component={Home} />
    <Route path="/about" component={About} />
  </Route>
)

syncParams(store, routes, browserHistory)

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
)

export default Routes
