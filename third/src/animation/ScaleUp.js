import React from 'react'
import { View, Animated, Image, Button } from 'react-native'

export default class ScaleUp extends React.Component {
    state = {
        value: 200,
        animatedValue: new Animated.Value(0)
    }

    handleAnimation = () => {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease
        }).start()
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='scale up'
                        onPress={() => {
                            this.setState({
                                value: this.state.value + 10
                            })
                        }}
                    /></View>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='scale down'
                        onPress={() => {
                            this.setState({
                                value: this.state.value - 10
                            })
                        }}
                    /></View>
                </View>
                <View style={{ width: this.state.value, height: this.state.value, backgroundColor: 'deeppink', alignSelf: 'center' }} />
                {/* <View style={{ flex:1, margin:10}}>
                        <View style={{margin:10}}><Button 
                            title='animate'
                            onPress={() => {

                            }}
                        /></View>
                        <View style={{width:200, height:200, backgroundColor:'hotpink', alignSelf:'center', transform: [
                            {
                                translateX: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 120]
                                })
                            },
                            {
                                translateY: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 25]
                                })
                            },
                            {
                                scaleX: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 15]
                                })
                            },
                            {
                                scaleY: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 12.5]
                                })
                            }
                        ]}}></View>
                </View> */}
            </View>
        )
    }
}