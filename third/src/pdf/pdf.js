import React from 'react'
import { View, Text, Dimensions, ActivityIndicator, Button } from 'react-native'
import Pdf from 'react-native-pdf'
import { TextInput } from 'react-native-gesture-handler'

export default class PDFtest extends React.Component {

    static navigationOptions = ({ navigation }) => {
        if (navigation.state.params && !navigation.state.params.removeTitleBar) {
            return {
                title: navigation.getParam('title', 'temp title')
            }
        } else {
            return {
                headerShown: false
            }
        }
    }

    state = {
        error: false,
        errorLog: '',
        title: this.props.navigation.state.params.title,
        source: {},
        check: false,
        numberOfPages: 0,
        page: 1
    }

    onRemoveTitleBar = () => {
        this.props.navigation.setParams({
            removeTitleBar: true
        })
    }

    componentDidMount() {

        const isBase64 = this.props.navigation.state.params.isBase64
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
            check: true
        })
    }

    _retry = () => {
        this.setState({
            error: false
        })
    }

    _paging = (page) => {
        this.pdf.setpage(parseInt(page))
    }

    render() {
        if (this.state.check) {
            if (this.state.error) {
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>
                            에러 발생! {'\n'}{'\n'} {this.state.errorLog}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, margin: 30 }}>
                                <Button
                                    title='재시도'
                                    onPress={() => {
                                        this._retry()
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, margin: 30 }}>
                                <Button
                                    title='돌아가기'
                                    onPress={() => {
                                        this.props.navigation.navigate('OpenFile')
                                    }}
                                />
                            </View>
                        </View>
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
                                this.setState({
                                    numberOfPages: numberOfPages
                                })
                            }}
                            onPageChanged={(page, numberOfPages) => {
                                // this._paging(page)
                            }}
                            onError={(error) => {
                                this.setState({
                                    error: true,
                                    errorLog: error.toString(),
                                    showTitleBar: false
                                })
                                this.onRemoveTitleBar()
                            }}
                            onPressLink={(uri) => {

                            }}
                            activityIndicator={
                                <ActivityIndicator />
                            }
                            style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                        />
                        <View style={{ backgroundColor: 'gray', height: Dimensions.get('window').height * 0.08, width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'white', height: Dimensions.get('window').height * 0.05 }}>
                                <TextInput
                                    keyboardType='numeric'
                                    value={this.state.page}
                                    // onChangeText={(number) => {
                                    //     if (number) {
                                    //         this._paging(number)
                                    //     }
                                    // }}
                                />
                            </View>
                            <View style={{ marginLeft: 3 }}><Text>/ {this.state.numberOfPages}</Text></View>
                        </View>
                    </View>
                )
            }
        } else {
            return (
                <ActivityIndicator />
            )
        }
    }

}