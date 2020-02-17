import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { observer, inject } from 'mobx-react'
import Test from '../components/showStore'


@inject('counter')
@observer
export default class transScreen extends Component {
  render() {
    const { counter } = this.props;
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor:'gray' }}>
          <Text style={{ fontSize: 30 }}>
            Show Global State
          </Text>
          <Text style={{margin:10, fontSize: 20, fontStyle: 'italic', borderBottomWidth: 1 }}>{counter.number}</Text>
          <Button 
            title= 'go back'
            onPress={() => {
              this.props.navigation.pop()
            }}
          />
        </View>
        <Test />
      </>
    )
  }
}

