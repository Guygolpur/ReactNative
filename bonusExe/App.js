import React, { Component } from 'react'
import Navigation from './src/components/Navigation/navigation'
// import Gyroscope from './src/components/Gyroscope/gyroscope'
// import Accelerometer from './src/components/Accelerometer/accelerometer'
import { AppRegistry, View, StyleSheet } from 'react-native'
import { name as appName } from './app.json'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    marginTop: 80,
  }
})

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Navigation />
          {/* <Gyroscope /> */}
          {/* <Accelerometer /> */}
        </View>
    )
  }
}
AppRegistry.registerComponent(appName, () => App)
