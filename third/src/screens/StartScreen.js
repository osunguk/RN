import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class StartScreen extends Component {
  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            Start Screen
          </Text>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='go login'
                onPress={() => {
                  this.props.navigation.navigate('LoginScreen')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='go test'
                onPress={() => {
                  this.props.navigation.navigate('testNavi')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='go MobX'
                onPress={() => {
                  this.props.navigation.navigate('MobXTest')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='go Request'
                onPress={() => {
                  this.props.navigation.navigate('RequestTest')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='Todo App'
                onPress={() => {
                  this.props.navigation.navigate('Todo')
                }}
              />
            </View>
          </View>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            <View style={{ flex: 0.2, padding: 10 }}>
              <Button 
                title='data form'
                onPress={() => {
                  this.props.navigation.navigate('upLoad')
                }}
              />
            </View>
          </View>
        </View>
      </>
    )
  }
}