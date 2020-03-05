import React from 'react'
import { View, Animated, Button } from 'react-native'

export default class SlideIn extends React.Component {
    state = {
        position: new Animated.ValueXY({ x: 0, y: 0 }),
    }

    slideInLeft = () => {
        this.setState({
            position: new Animated.ValueXY({ x: -600, y: 0 })
        },() => {
            Animated.timing(
                this.state.position, {
                toValue: { x: 0, y: 0 },
                duration: 1000
            }).start()
        })
    }

    slideInRight = () => {
        this.setState({
            position: new Animated.ValueXY({ x: 600, y: 0 })
        },() => {
            Animated.timing(
                this.state.position, {
                toValue: { x: 0, y: 0 },
                duration: 1000
            }).start()
        })
    }

    slideInTop = () => {
        this.setState({
            position: new Animated.ValueXY({ x: 0, y: -600 })
        },() => {
            Animated.timing(
                this.state.position, {
                toValue: { x: 0, y: 0 },
                duration: 1000
            }).start()
        })
    }

    slideInBottom = () => {
        this.setState({
            position: new Animated.ValueXY({ x: 0, y: 600 })
        },() => {
            Animated.timing(
                this.state.position, {
                toValue: { x: 0, y: 0 },
                duration: 1000
            }).start()
        })
    }


    render() {
        const trans = this.state.position
        return (
            <>
                <View style={{ flexDirection: 'row', borderTopColor: 'black', borderTopWidth: 1, marginTop: 10 }}>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='slide left'
                        onPress={() => {
                            this.slideInLeft()
                        }}
                    /></View>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='slide rigth'
                        onPress={() => {
                            this.slideInRight()
                        }}
                    /></View>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='slide top'
                        onPress={() => {
                            this.slideInTop()
                        }}
                    /></View>
                    <View style={{ flex: 1, margin: 10 }}><Button
                        title='slide bot'
                        onPress={() => {
                            this.slideInBottom()
                        }}
                    /></View>
                </View>
                {/* , transform: [{translateX , translateY}]  */}
                <View style={{ flex: 1, backgroundColor: 'blanchedalmond', alignItems: 'center', justifyContent: 'center'}}>
                    <Animated.View style={{ width: 200, height: 200, backgroundColor: 'blueviolet', transform: [{translateX: trans.x}, {translateY: trans.y}] }} />
                </View>
            </>

        )
    }
}

