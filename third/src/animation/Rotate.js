import React from 'react'
import { View, Animated, Easing } from 'react-native'

export default class Rotate extends React.Component {
    state = {
        spin: new Animated.Value(0)
    }

    componentDidMount() {
        this._rotate()
    }

    _rotate = () => {
        Animated.loop(
            Animated.timing(
                this.state.spin, {
                useNativeDriver: true,
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            })
        ).start()
    }

    render() {
        const spin = this.state.spin.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{ width: 200, height: 10, backgroundColor: 'red', transform: [{ rotate: spin }] }} />
            </View>
        )
    }
}