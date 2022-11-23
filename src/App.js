/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import RootNavigator from "./navigation/RootNavigator";

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App;
