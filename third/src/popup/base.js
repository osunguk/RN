import React from 'react'
import { Text, Button, View, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

class base extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <View style={{  backgroundColor: 'red' }}><Text style={{ textAlign: 'left' }}>test</Text></View>
        <Text style={{ marginBottom: 20 }}>
          pop up text screen
        </Text>
        <Button
          title='popup'
          onPress={() => {
            this.props.navigation.navigate('modal')
          }}
        />
      </View>
    )
  }
}

class modal extends React.Component {
  static navigationOptions = {
    cardStyle: {
      backgroundColor: 'transparent'
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'column',overflow:'hidden'}}
        onPress={() => {
          this.props.navigation.pop()
        }}
        activeOpacity={1}
      >
        <View style={{ backgroundColor: '#fefefe', backgroundColor: '#fefefe', paddingTop: 10, borderRadius: 10, overflow: 'hidden' }}>
          <Text style={{ fontSize: 25, color: 'mediumseagreen', textAlign: 'center' }}>
            제로고
            <Text style={{ fontSize: 25, color: 'mediumseagreen', fontWeight: 'bold', textAlign: 'center' }}>
              {' '}iOS 앱 출시!
            </Text>
          </Text>

          <Text style={{ marginTop: 10, textAlign: 'center' }}>
            이제 아이폰을 사용하는 친구와 {'\n'}
            <Text>
              함께 제로고 해요!
            </Text>
          </Text>
          <Image
            source={require('./test.png')}
            style={{ width: 300, height: 150, resizeMode: 'contain' }}
          />
          <Text style={{ margin: 20, textAlign: 'center' }}>
            친구와 함께{' '}
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', textAlign: 'center' }}>
              2,000골드
            </Text>
           도 받으세요
          </Text>
          <View style={{ flexDirection: 'row'}}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  this.props.navigation.navigate('base')
                }}
                style={{alignItems:'center', backgroundColor:'gray', padding:15}}
              >
                <Text style={{color:'white', fontWeight:'bold', fontSize:15}}> 오늘 닫기 </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 2 }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  this.props.navigation.navigate('testNavi')
                }}
                style={{alignItems:'center', backgroundColor:'black', padding:15}}
              >
                  <Text style={{color:'white', fontWeight:'bold', fontSize:15}}> 친구 초대 </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </TouchableOpacity>
    )
  }
}

const RootStack = createStackNavigator({
  base: base,
  modal: modal
}, {
  mode: 'modal',
  headerMode: 'none',
  
})

export default RootStack