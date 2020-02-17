import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class test4 extends Component {
  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            reset test 4
          </Text>
          <Button
            title='next page'
            onPress={() => {
              this.props.navigation.navigate('test5')
            }}
          />
        </View>
      </>
    )
  }
}