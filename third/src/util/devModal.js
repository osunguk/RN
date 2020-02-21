import React from 'react'
import {View, Button, Text} from 'react-native'

class Dev extends React.Component{
  state = this.props
  render(){
    console.log('render')
    return(
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text>
          dev Modal
        </Text>
      </View>
    )
  }
}

export {Dev}