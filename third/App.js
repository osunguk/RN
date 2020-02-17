/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Router from './src/Router'
import { Provider } from 'mobx-react'
import CounterStore from './src/stores/counter'

const counter = new CounterStore();

class App extends Component {
  render() {
    return (
      <Provider counter={counter}>
        <Router/>
      </Provider>
    )
  }
}
export default App;