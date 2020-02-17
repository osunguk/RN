import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'

export class choice extends Component {
  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{fontSize:30}}>
            choice
          </Text>
          <Button 
            title='toggle button'
            onPress={() => {
              this.props.navigation.toggleDrawer()
            }}
          />
          <Button
          title='go first'
          onPress={() => {
            this.props.navigation.navigate('StartScreen')
          }}
        />
        </View>
      </>
    )
  }
}