import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Pdf from 'react-native-pdf'
import ErrorPage from './ErrorPage'

export default class second extends React.Component {
    static navigationOptions = ({ navigation }) => {
        if (navigation.state.params && !navigation.state.params.removeTitleBar) {
            return {
                title: navigation.getParam('title', 'file name')
            }
        } else {
            return {
                headerShown: false
            }
        }
    }

    state = {
        source: {},
        error: false,
        errorLog: '',
        showPDF: false,
    }

    componentDidMount() {
        const isbase64 = this.props.navigation.state.params.isbase64
        if (isbase64) {
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

    onRemoveTitleBar = () => {
        this.props.navigation.setParams({
            removeTitleBar: true
        })
    }

    _retry = () => {
        this.setState({
            error: false
        })
    }

    _show = () => {
        this.setState({
            showPDF: true
        })
    }

    _goBack = () => {
        this.props.navigation.pop()
    }

    render() {
        if (this.state.showPDF) {
            if (this.state.error) {
                return (
                    <ErrorPage 
                        errorLog={this.state.errorLog}
                        _retry={this._retry}
                        _goBack={this._goBack}
                    />
                )
            } else {
                return (
                    <View style={{ flex: 1 }}>
                        <Pdf
                            source={require('../static/sample.pdf')}
                            onError={error => {
                                this.setState({
                                    errorLog: error.toString(),
                                    error: true
                                })
                                this.onRemoveTitleBar()
                            }}
                            activityIndicator={
                                <ActivityIndicator />
                            }
                            style={{ flex: 1 }}
                        />
                    </View>
                )
            }
        } else {
            return (
                null
            )
        }
    }
}