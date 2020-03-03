import React from 'react'
import { View, Text, Button } from 'react-native'

export default class ErrorPage extends React.Component {
    render() {
        const { errorLog, _retry, _goBack } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>에러 발생! {`\n`}{`\n`} {errorLog}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, margin: 30 }}>
                        <Button
                            title='재시도'
                            onPress={() => {
                                _retry()
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, margin: 30 }}>
                        <Button
                            title='돌아가기'
                            onPress={() => {
                                _goBack()
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}