import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';

export class SignupScreen extends Component {

  componentDidMount() {
      setTimeout(() => {
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({
            routeName: 'StartScreen',
          
          })]
        }))
      }, 2000);
  }

  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{fontSize:30}}>
            Signup Screen
          </Text>
        </View>
      </>
    )
  }
}