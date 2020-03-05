import React from 'react'
import { View, Animated, Button } from 'react-native'

export default class FadeInOut extends React.Component {
    state = {
        value: new Animated.Value(0),
        showBtn: false
    }

    componentDidMount() {
        this._fadeInOut()
    }


    _fadeInOut = () => {
        Animated.timing(
            this.state.value, {
            toValue: 1,
            duration: 1000,
        }).start(() => {
            Animated.timing(
                this.state.value, {
                toValue: 0,
                duration: 1000,
            }).start(() => {
                this.btnShow()
                this.setState({
                    value: new Animated.Value(0)
                })
            })
        })
    };

    again = () => {
        this.setState({
            showBtn:false
        })
        this._fadeInOut()
    }

    btnShow = () => {
        this.setState({
            showBtn: true
        })
    }

    render() {
        return (
            <>
                {this.state.showBtn
                    ? <View><Button
                        title='again'
                        onPress={() => {
                            this.again()
                        }}
                    /></View>
                    : null
                }
                < View style={{ flex: 1 }}>
                    <Animated.View style={{ flex: 1, backgroundColor: 'red', opacity: this.state.value }} />
                    <Animated.View style={{ flex: 1, backgroundColor: 'orange', opacity: this.state.value }} />
                    <Animated.View style={{ flex: 1, backgroundColor: 'yellow', opacity: this.state.value }} />
                    <Animated.View style={{ flex: 1, backgroundColor: 'green', opacity: this.state.value }} />
                    <Animated.View style={{ flex: 1, backgroundColor: 'blue', opacity: this.state.value }} />
                    <Animated.View style={{ flex: 1, backgroundColor: 'indigo', opacity: this.state.value }} />
                    <Animated.View style={{ flex: 1, backgroundColor: 'purple', opacity: this.state.value }} />
                </View >
            </>
        )
    }
}