import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import stack from './practice/stack'
import drawer from './practice/drawer'
import tab from './practice/tab'
import reset from './practice/reset'
import { choice } from './practice/choice'

import test1 from './practice/test1'
import test2 from './practice/test2'
import test3 from './practice/test3'
import test4 from './practice/test4'
import test5 from './practice/test5'

import { StartScreen } from './screens/StartScreen'
import { LoginScreen } from './screens/LoginScreen'
import { SignupScreen } from './screens/SignupScreen'
import { MainScreen } from './screens/MainScreen'

import MobXTest from './mobx/simple'
import MobXTest2 from './mobx/transScreen'

import RequestTest from './apirequest/request'

import Todo from './apirequest/simpleTodo'

import upload from './upload/upload'
import fileupload from './upload/fileupload'

const practiceNavigation = createDrawerNavigator({
  'stack navi':stack,
  'drawer navi':drawer,
  'tab navi':tab,
  'reset test':reset,
  choice:choice
},{
  initialRouteName:'choice'
})

const resetTest = createStackNavigator({
  'reset test':reset,
  'test1':test1,
  'test2':test2,
  'test3':test3,
  'test4':test4,
  'test5':test5,
  
},{
  defaultNavigationOptions : {
    headerShown: false
  }
})

const appNavigation = createStackNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions : {
      headerShown: false
    }
  },
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen,
  MainScreen: MainScreen,

  testNavi: {
    screen: practiceNavigation,
    navigationOptions : {
      headerShown: false
    }
  },
  resetTest:resetTest,

  MobXTest: MobXTest,
  MobXTest2: MobXTest2,

  RequestTest: RequestTest,

  Todo:Todo,

  upLoad:upload,  
  fileupload:fileupload
}, {
  initialRouteName: 'StartScreen',
})

export default createAppContainer(appNavigation)

// export default createAppContainer(createSwitchNavigator(
//   {
//   Main: appNavigation,
//   Practice: practiceNavigation,
//   resetTest: resetTest
//   },
//   {
//     initialRouteName: 'Main'
//   }
// ))