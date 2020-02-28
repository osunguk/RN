import React, { Component } from 'react'
import { Text, View, Button, FlatList } from 'react-native'
import { create } from 'apisauce'

const path = "https://jsonplaceholder.typicode.com/todos"

const api = create({
  baseURL: path,
})


export default class request extends Component {
  state = {
    result: []
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
          <FlatList
            data={this.state.result}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={{ flexDirection: 'row', margin:10 }}>
                  <View style={{ width: 30, justifyContent: 'center' }}>
                    <Text>{item.id}</Text>
                  </View>
                    <Text style={{ fontSize: 20, textAlign: 'left' }}>{item.title}</Text>
                </View>
                )
            }}
          />
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