import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { observer, inject } from 'mobx-react'


@inject('counter')
@observer
export default class test extends Component {
  render() {
    const { counter } = this.props;
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor:'gray' }}>
          <Text style={{ fontSize: 30 }}>
            Another Screen{'\n'}
                  & {'\n'}
            Global State
          </Text>
          <Text style={{margin:10, fontSize: 20, fontStyle: 'italic', borderBottomWidth: 1 }}>{counter.number}</Text>
        </View>
      </>
    )
  }
}

