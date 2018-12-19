import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Root from './containers/Root'
import configureStore from './store/configureStore'
import './main.css';


// 实例化全局store
const defaultValue = {
  todoList: [{
    name: 'ben',
    age: 10
  }, {
      name: 'jack',
      age: 10
  }, {
      name: 'rock',
      age: 10
  }],
};

const store = configureStore(defaultValue)

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)