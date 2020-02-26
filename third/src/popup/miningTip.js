import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export class miningTip extends React.Component {
  static navigationOptions = {
    cardStyle: {
      backgroundColor: 'transparent'
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text>💰</Text>
        <Text>채굴 필독</Text>
      </View>
    )
  }
}