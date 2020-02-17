import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { create } from 'apisauce'

const path = " http://127.0.0.1:5000/todos"

const api = create({
  baseURL: path,
})


export default class request extends Component {
  state = {
    result: {
      "hello": "hello"
    }
  }
  test = () => {
    api.get('')
      .then(res => {
        this.setState({
          result: res.data
        })
      })
  }

  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            Request Screen
          </Text>
          <Text style={{margin:10, fontSize: 20, fontStyle: 'italic', borderBottomWidth: 1 }}>{this.state.result["hello"]}</Text>
          <Button
            title='Request Api'
            onPress={() => { this.test() }}
          />
          <Button
            title='go first'
            onPress={() => { this.props.navigation.navigate('StartScreen') }}
          />
        </View>
      </>
    )
  }
}