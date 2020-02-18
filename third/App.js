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
import Store from './src/stores/store'

const store = new Store();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}
export default App;