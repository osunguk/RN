import React from 'react'
import { View, Text, Button } from 'react-native'
import Second from './second'

export default class first extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    state = {
        title: '이용 약관',
        uri: 'https://www.rfc-editor.org/rfc/rfc2616.pdfa',
        isbase64: false,
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text>PDF test{'\n'}</Text>
                <View style={{margin:10, padding: 20, borderColor: 'black', borderWidth: 1 }}>
                    <Text>title : {this.state.title}{'\n'}</Text>
                    <Text>uri : {this.state.uri}{'\n'}</Text>
                    <Text>isbase64 : {this.state.isbase64 ? 'true' : 'false'}{'\n'}</Text>
                </View>
                <Button
                    title='go'
                    onPress={() => {
                        this.props.navigation.navigate('pdfShow', { uri: this.state.uri, title: this.state.title, isbase64: this.state.isbase64 })
                    }}
                />
            </View>
        )
    }
}