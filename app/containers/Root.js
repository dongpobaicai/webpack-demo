import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from './Home'
import NewTodo from './NewTodo'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/new" component={NewTodo} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
