import React, { Component } from 'react';
// import ListView from './src/components/ListView/listView'
import { Provider, connect } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/rootReducer'
import { AppRegistry, View, StyleSheet } from 'react-native'
import { name as appName } from './app.json'

import Header from './src/components/Header/header'
import PhotoList from './src/components/photos/photoList'


const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}
const store = createStore(rootReducer, initialState, composedEnhancers)


const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})

const mapStateToProps = ({ header }) => {
  return {
    headerMode: header.headerMode
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <SearchB/> */}
        {/* <ListView/> */}
        <View style={styles.appContainer}>
        <Header />
        <PhotoList />
        </View>
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => Application)
