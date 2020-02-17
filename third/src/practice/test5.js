
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';

export default class test5 extends Component {
  render() {
    const resetAction = StackActions.reset({
      key: null,
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StartScreen' }),
      ],
    })
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            reset test
          </Text>
          <Button
            title='reset'
            onPress={() => {
              this.props.navigation.dispatch(resetAction)
            }}
          />
        </View>
      </>
    )
  }
}