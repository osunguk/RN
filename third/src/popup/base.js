import React from 'react'
import { Text, Button, View, Image, Dimensions } from 'react-native'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'

class base extends React.Component {
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     headerLeft: () => (
  //       <Button
  //         onPress={() => navigation.navigate('MyModal')}
  //         title = 'info'
  //       />
  //       )
  //   }
  // }

  static navigationOptions = {
    headerShown: false
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 20 }}>
          pop up text screen
        </Text>
        <Button
          title='popup'
          onPress={() => {
            this.props.navigation.navigate('Modal')
          }}
        />
      </View>
    )
  }
}

class modal extends React.Component{
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{alignSelf:'center', fontSize:25,color:'mediumseagreen'}}>
          제로고
          <Text style={{alignSelf:'center', fontSize:25,color:'mediumseagreen', fontWeight:'bold'}}>
          iOS 앱 출시!
          </Text>
        </Text>
        
        <Text style={{textAlign:'center', marginTop:10}}>
        이제 아이폰을 사용하는 친구와 {'\n'}
          <Text>
            함께 제로고 해요!
          </Text>
        </Text>
        <Image 
          source={require('./test.png')}
          style={{width:300, height:150, resizeMode:'contain'}}
        />
        <Text style={{alignSelf:'center'}}>
          친구와 함께{' '} 
          <Text style={{alignSelf:'center', fontWeight:'bold'}}>
          2,000골드
          </Text>
           도 받으세요
        </Text>
      </View>
    )
  }
}

const RootStack = createStackNavigator({
  Main: base,
  Modal:modal
},{
  mode: 'modal',
  headerMode:'none',
  defaultNavigationOptions: {
    gestureEnabled: true,
    cardOverlayEnabled: true,
  }
})

export default RootStack