import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MainScreen extends Component {
  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{fontSize:30}}>
            Main Screen
          </Text>
        </View>
      </>
    )
  }
}