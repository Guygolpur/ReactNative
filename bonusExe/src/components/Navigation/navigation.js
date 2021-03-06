import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Tabbar from 'react-native-tabbar-bottom'
import Drag from '../Gestures/drag'
import Location from '../Location/location'
import LongPressButton from '../Gestures/longPressButton'
import Swipe from '../Gestures/swipe'
import Accelerometer from '../Accelerometer/accelerometer'
import Gyroscope from '../Gyroscope/gyroscope'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      page: 'HomeScreen'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.page === 'HomeScreen' && <Location />}
        {this.state.page === 'NotificationScreen' && <Drag />}
        {this.state.page === 'ProfileScreen' && <LongPressButton />}
        {this.state.page === 'ChatScreen' && <Swipe />}
        {this.state.page === 'Gyroscope' && <Accelerometer />}
        {this.state.page === 'Accelerometer' && <Gyroscope />}

        <Tabbar
          stateFunc={tab => {
            this.setState({ page: tab.page })
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: 'HomeScreen',
              icon: 'locate'
            },
            {
              page: 'NotificationScreen',
              icon: 'tennisball'
            },
            {
              page: 'ProfileScreen',
              icon: 'radio-button-on'
            },
            {
              page: 'ChatScreen',
              icon: 'swap'
            },
            {
              page: 'Gyroscope',
              icon: 'tablet-landscape'
            },
            {
              page: 'Accelerometer',
              icon: 'thermometer'
            }
          ]}
        />
      </View>
    )
  }
}
