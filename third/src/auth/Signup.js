import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

export class Signup extends Component {
  state = {
    id: '',
    pw: '',
    email: '',
  }

  render() {
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            Signup Screen
          </Text>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ flexDirection: "column", alignSelf: 'flex-start', marginTop: 20 }}>
              <Text style={{ fontSize: 15, fontFamily: '', padding: 10 }}>아이디 입력 </Text>
              <TextInput
                style={{ height: 40, borderWidth: 1, borderRadius: 100, minWidth: 200 }}
                placeholder="     Input ID"
                onChange={(text) => this.setState({
                  id: text
                })}
                value={this.state.id}
              />
            </View>
            <View style={{ flexDirection: "column", alignSelf: 'flex-start' }}>
              <Text style={{ fontSize: 15, fontFamily: '', padding: 10 }}>비밀번호 입력 </Text>
              <TextInput
                style={{ height: 40, borderWidth: 1, borderRadius: 100, minWidth: 200 }}
                placeholder="     Input PassWord"
                onChange={(text) => this.setState({
                  pw: text
                })}
                value={this.state.id}
              />
            </View>
            <View style={{ marginTop: 60 }}>
              <View style={{margin:10}}>
                <Button
                  title='회원 가입 하기(Login 으로 감)'
                  onPress={() => {
                    this.props.navigation.navigate('Login')
                  }}
                />
              </View>
              <View style={{margin:10}}>
                <Button
                  color='red'
                  title='취소하기(Login 으로 감)'
                  onPress={() => {
                    this.props.navigation.navigate('Login')
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </>
    )
  }
}