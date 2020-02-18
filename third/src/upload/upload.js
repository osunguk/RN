import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { create } from 'apisauce'
import { todoApi } from '../URL/URL'

// Form-Data 형식으로 Post 보내는 방법

const api = create({
  baseURL: todoApi
})

export default class upload extends Component {
  static navigationOptions = {
    headerShown: false
  }

  action1 = () => {
    const data = new FormData();
    data.append('task', 'good job');
    api.post('', data)
  }

  action2 = () => {
    api.post(todoApi,new URLSearchParams({
      'task': 'testtest'
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
  }

  action3 = () => {
    api.post(todoApi,{"task":'app json'},{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
        <Text>up load</Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title='Form-Data test'
            onPress={() => { this.action1() }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title='x-www-form-urlencoded test'
            onPress={() => { this.action2() }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title='application/json test'
            onPress={() => { this.action3() }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title='next page'
            onPress={() => {this.props.navigation.navigate('fileupload')}}
            color = 'skyblue'
          />
        </View>
      </View>
    )
  }
}