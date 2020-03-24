

# react-native init prj

*Trouble shooting & Know-how & Tip*

### react-native init 디렉토리 구조

```shell
.
├── App.js
├── android/
├── app.json
├── index.js
├── ios/
├── node_modules/
├── package.json
└── yarn.lock
```

1. index.js
   프로젝트를 실행할 때 가장 먼저 실행되는 기점이다.

   ```javascript
   import {AppRegistry} from 'react-native';
   import App from './App';
   import {name as appName} from './app.json';
   
   AppRegistry.registerComponent(appName, () => App);
   
   ```

   위와같이 App을 불러와서 컴포넌트에 등록한다

   주로 해당 파일에 navigation을 추가해서 사용한다

2. App.js
   실제로 디바이스에 뜨는 화면을 구성하는 소스코드들이 들어있다

3. app.json
   프로젝트 이름, 앱의 이름이 작성되어있고 배포단계에서 사용된다

4. android/
   안드로이드 네이티브 모듈을 담당하고있는 부분이다
   react-native에서 지원하지 않는 기능들을 사용하기 위해서는 네이티브 모듈을 직접 구현해야 한다.

5. ios/
   안드로이드 디렉토리와 유사한 기능

6. node_modules/
   npm을 통해 설치한 모듈이 위치하는곳으로 의존성 문제가 가장 많이 발생되는 곳으로 번들 문제나 모듈 문제가 발생되면 해당 폴더를 지우고 `npm install`을 통해서 해당 문제을 어느정도 해결할 수 있다

7. package.json
   프로젝트와 관련도니 모듈들이 기록된 파일이며, 모듈들의 버전관리에 대한 정보가 들어가 있다

8. yarn.lock
   package.json 과 유사한 기능을 합니다



### Something Want

1. iphone X 에서 노치 영역까지 화면이 그려진다.
   `<SafeAreaView>` 를 사용하였다.
2. 스크롤 되는 화면을 그리고 싶다.
   `<ScrollView>` 를 사용하였다.
3. flex를 사용하지 않고 width 값을 100%로 채우고 싶다.
   Dimensions.get(‘window’).width 로 현재 device width 를 가져와 세팅했다.
4. 리스트를 만들고 싶다.
   `FlatList` 를 사용하였다.
5. 새창을 띄우고 싶다.
   `Modal` 을 사용하였다.
6. API를 쓰고 싶다.
   fetch와 Promise 를 사용하였다.



### ajax 요청시 NETWORK_ERROR

```shell
> adb reverse tcp:5000 tcp:5000
```

당시 로컬 호스트 5000 포트로 flask 서버를 띄우고 있었는데 네트워크 오류가 떴다
postman으로 http 요청을 했을 때 아무 문제가 없었고 adb 를 통해 포트를 연결? 해주는 작업을 통해서 해결



### for 문 사용하기

```react
render(){
	var payments = [];
	for(let i = 0; i < noGuest; i++){
		payments.push(
			<View key = {i}>
				<View>
					<TextInput />
				</View>
				<View>
					<TextInput />
				</View>
				<View>
					<TextInput />
				</View>
			</View>
		)
	}	
	return (
		<View>
			<View>
				<View><Text>No</Text></View>
				<View><Text>Name</Text></View>
				<View><Text>Preference</Text></View>
			</View>
			{ payments }
		</View>
	)
}
```





# MobX

Redux 와 양대산맥을 그리고 있는 대표적인 상태 관리 라이브러리, React 의 프로젝트가 커짐에 따라 props 와 state를 이용한 상태관리가 매우 힘들고 복잡해 지는데 해당 라이브러리를 사용하면 간편하고 효율적으로 state를 관리 할 수 있다



> MobX 의 가장 핵심적인 부분은 `observable` !!
>
> `@` 하나로 특정 객체를 감시할 수 있게 된다 !!

