import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

// 라우터 text
import stack from './practice/stack'
import drawer from './practice/drawer'
import tab from './practice/tab'
import reset from './practice/reset'
import { choice } from './practice/choice'
//
import test1 from './practice/test1'
import test2 from './practice/test2'
import test3 from './practice/test3'
import test4 from './practice/test4'
import test5 from './practice/test5'
//
import { StartScreen } from './screens/StartScreen'
import { LoginScreen } from './screens/LoginScreen'
import { SignupScreen } from './screens/SignupScreen'
import { MainScreen } from './screens/MainScreen'

// 상태관리
import MobXTest from './mobx/simple'
import MobXTest2 from './mobx/transScreen'

// ajax 요청
import RequestTest from './apirequest/request'

// 간단한 todo
import Todo from './apirequest/simpleTodo'

// 이미지 출력 및 업로드
import upload from './upload/upload'
import fileupload from './upload/fileupload'
import imagePick from './upload/imagePick'

// auth 관련
import { Loading } from './auth/Loading'
import { Login } from './auth/Login'
import { Signup } from './auth/Signup'

// tabView - View Paper
import { tabView } from './viewpaper/tabView'

// toastMessage
import { toastMessage } from './toast/toastMessage'

// modal page
import RootStarck from './popup/base'

// flat List test
import flatList from './flat/flatList'

// pop up list
import { miningTip } from './popup/miningTip'

// map
import map from './map/map'

// pdf viewer
import pdf from './pdf/pdf'
import OpenFile from './pdf/OpenFile'

const authNavigation = createStackNavigator({
  Login: Login,
  Signup: Signup
}, {
  defaultNavigationOptions: {
    headerShown: false
  },
  initialRouteName: 'Login'
}
)

const practiceNavigation = createDrawerNavigator({
  'stack navi': stack,
  'drawer navi': drawer,
  'tab navi': tab,
  'reset test': reset,
  choice: choice
}, {
  initialRouteName: 'choice'
})

const resetTest = createStackNavigator({
  'reset test': reset,
  'test1': test1,
  'test2': test2,
  'test3': test3,
  'test4': test4,
  'test5': test5,

}, {
  defaultNavigationOptions: {
    headerShown: false
  }
})

const appNavigation = createStackNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen,
  MainScreen: MainScreen,

  testNavi: {
    screen: practiceNavigation,
    navigationOptions: {
      headerShown: false
    }
  },
  resetTest: resetTest,

  MobXTest: MobXTest,
  MobXTest2: MobXTest2,

  RequestTest: RequestTest,

  Todo: Todo,

  upLoad: upload,
  fileupload: fileupload,
  imagePick: imagePick,

  tabView: {
    screen: tabView,
    navigationOptions: {
      headerShown: false
    }
  },

  toastMessage: toastMessage,

  base: {
    screen:RootStarck,
    navigationOptions: {
      headerShown:false
    }
  },

  flatList:flatList,

  map:map,

  pdf:pdf,
  OpenFile:OpenFile,

  miningTip:miningTip
}, {
  initialRouteName: 'StartScreen',
  mode:'modal',
  defaultNavigationOptions: {
    headerMode:'none',
  }
})

export default createAppContainer(createSwitchNavigator(
  {
    App: appNavigation,
    Auth: authNavigation,
    Loading: Loading
  },
  {
    initialRouteName: 'Loading'
  }
))