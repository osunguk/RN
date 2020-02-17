import React from 'react'
import { View, Text, TextInput, Button, ScrollView } from 'react-native'
import { create } from 'apisauce'
import { todoApi } from '../URL/URL'

const api = create({
  baseURL: todoApi
})

export default class TODO extends React.Component {
  static navigationOptions = {
    headerShown: false
  }

  state = {
    todoList: [],
    text: '',
  }

  componentDidMount() {
    let tmp = []
    api.get('')
      .then(result => result["data"])
      .then(res => {
        for (const x in res) {
          tmp.push(res[x])
        }
        this.setState({
          todoList: tmp
        })
      })
  }

  test = () => {
    return this.state.todoList.map((todo, i) => {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text key={i} style={{ margin: 10, padding: 10 }}> >  {todo.task}</Text>
          <View>
            <Button
              title="delete"
              color='red'
            />
          </View>
        </View>
      )
    })
  }

  Refresh = () => {
    let tmp = []
    api.get('')
      .then(result => result["data"])
      .then(res => {
        for (const x in res) {
          tmp.push(res[x])
        }
        this.setState({
          todoList: tmp
        })
      })
  }

  PostTask = () => {
    if (this.state.text.length > 0) {
      api.post('', { task: this.state.text })
    } else {
      alert('Input your task')
    }
    this.Refresh()
    this.textInput.clear()
  }

  DeleteTask = () => {
    api.delete('')
  }

  render = () => {
    return (
      <ScrollView>
        <Text style={{ margin: 10, fontSize: 20, fontStyle: 'italic', borderBottomWidth: 1 }}>ToDo api Test</Text>
        {this.test()}
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 15, paddingBottom: 10 }}>new Task input</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
            onChangeText={text => {
              this.setState({
                text: text
              })
            }}
            value={this.state.text}
            ref={input => { this.textInput = input }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ margin: 10, width: 150, alignSelf: 'center', marginBottom: 100 }}>
            <Button
              title='add task'
              onPress={() => {
                this.PostTask()
              }}
            />
          </View>
          <View style={{ margin: 10, width: 150, alignSelf: 'center', marginBottom: 100 }}>
            <Button
              title='All Delete Task'
              color='red'
              onPress={() => {
                this.DeleteTask()
              }}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}




