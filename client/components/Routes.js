import React, {Component} from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './Main'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Route exact path="/" component={Main} />
      </Router>
    )
  }
}