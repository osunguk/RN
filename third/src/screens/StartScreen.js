import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

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
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='data form'
                onPress={() => {
                  this.props.navigation.navigate('upLoad')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='View paper'
                onPress={() => {
                  this.props.navigation.navigate('tabView')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='Toast msg'
                onPress={() => {
                  this.props.navigation.navigate('toastMessage')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='modal'
                onPress={() => {
                  this.props.navigation.navigate('base')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='log out'
                color='red'
                onPress={async () => {
                  await AsyncStorage.clear()
                  this.props.navigation.navigate('Loading')
                }}
              />
            </View>
          </View>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='zerogo clone'
                onPress={() => {
                  this.props.navigation.navigate('flatList')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='pdf viewer'
                onPress={() => {
                  this.props.navigation.navigate('OpenFile')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='pdf component'
                onPress={() => {
                  this.props.navigation.navigate('pdfTest')
                }}
              />
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Button
                title='RN-maps'
                color='slateblue'
                onPress={() => {
                  this.props.navigation.navigate('map')
                }}
              />
            </View>
          </View>
        </View>
      </>
    )
  }
}