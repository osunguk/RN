import React from 'react'
import { View, Text, Dimensions, ActivityIndicator, Button } from 'react-native'
import Pdf from 'react-native-pdf'

export default class PDFtest extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'temp title')
    }
  }

  state = {
    error: false,
    errorLog: '',
    title: this.props.navigation.state.params.title,
    source: {},
    check: false
  }

  async componentDidMount() {
    const isBase64 = await this.props.navigation.state.params.isBase64
    if (isBase64) {
      this.setState({
        source: { uri: "data:application/pdf;base64,".concat(this.props.navigation.state.params.uri) }
      }, () => {
        this._show()
      })

    } else {
      this.setState({
        source: { uri: this.props.navigation.state.params.uri }
      }, () => {
        this._show()
      })
    }
  }

  _show = () => {
    this.setState({
      check:true
    })
  }

  render() {
    if (this.state.check) {
      if (this.state.error) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center' }}>
              에러 발생! {'\n'} {this.state.errorLog}
            </Text>
            <Button
              title='다시 시도하기'
              onPress={() => {
                this.props.navigation.navigate('OpenFile')
              }}
            />
          </View>
        )
      } else {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pdf
              ref={(pdf) => { this.pdf = pdf }}
              source={this.state.source} // open 할 paf 파일 소스
              // page={110} 초기 페이지 설정
              onLoadProgress={() => {
                // 로딩중에 돌릴 함수
              }}
              onLoadComplete={(numberOfPages, filePath) => {
                // console.log(numberOfPages, filePath)
                // 로딩 다 되면
              }}
              onPageChanged={(page, numberOfPages) => {
                // console.log(page, numberOfPages)
                // 페이지 넘어가면
              }}
              onError={(error) => {
                this.setState({
                  error: true,
                  errorLog: error.toString()
                })
              }}
              onPressLink={(uri) => {

              }}
              activityIndicator={
                <ActivityIndicator />
              }
              style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
            />
            <Button
              title='go first'
              onPress={() => {
                this.pdf.setPage(1)
              }}
            />
          </View>
        )
      }
    } else {
      return null
    }
  }

}