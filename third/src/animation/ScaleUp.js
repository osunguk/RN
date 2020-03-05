import React from 'react'
import { View, Animated, Image, Button } from 'react-native'

export default class ScaleUp extends React.Component {
    state = {
        value: new Animated.Value(1)
    }



    render() {

        return (
            <View style={{ flex: 1}}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='scale up'
                        onPress={() => {
                            Animated.timing(
                                this.state.value, {
                                toValue: this.state.value + 1,
                                duration: 1000
                            }).start()
                        }}
                    /></View>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='scale down'
                        onPress={() => {
                            Animated.timing(
                                this.state.value, {
                                toValue: this.state.value - 1,
                                duration: 1000
                            }).start()
                        }}
                    /></View>
                </View>
                {/* <Animated.Image
                    source={require('../static/image/img_modal.png')}
                    style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', scale: this.state.value}}
                    resizeMode='stretch'
                /> */}
                <Animated.View style={{ width:200, height:200 , backgroundColor:'deeppink', scale: this.state.value , alignSelf:'center'}}/>
            </View>
        )
    }
}