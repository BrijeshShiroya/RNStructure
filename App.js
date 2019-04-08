/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  createAppContainer,
} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/store';
import thunk from 'redux-thunk';
import AppNavigator from './src/AppRouteConfig';




const AppContainer = createAppContainer(AppNavigator);

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const store = createStore(rootReducer, applyMiddleware(thunk))
export default class App extends Component {
  render() {
    const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;
    return (
      <Provider store={store}>
        <AppContainer
          // persistenceKey={navigationPersistenceKey}
          onNavigationStateChange={(prevState, currentState, action) => {
            const currentScreen = getActiveRouteName(currentState);
            const prevScreen = getActiveRouteName(prevState);

            if (prevScreen !== currentScreen) {
              //log current screen name
              console.log(currentScreen)
            }
          }} />
      </Provider>
    )
  }
}


{/* <AppContainer
  persistenceKey={navigationPersistenceKey}
  onNavigationStateChange={(prevState, currentState, action) => {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
      //log current screen name
      console.log(currentScreen)
    }
  }}
/> */}
