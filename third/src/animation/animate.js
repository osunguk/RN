import React from 'react'
import { View, Text, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class animate extends React.Component {
    state = {
        value: new Animated.Value(0),
    }

    componentDidMount() {
        this._fadeIn()
    }

    _fadeIn() {
        Animated.timing(
            this.state.value, {
            toValue: 1,
            duration: 1000,
        }
        ).start(() => {
        })
    };

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center' }}>Animation Test</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{padding:10,borderColor:'black', borderRadius:10, borderWidth:1}}>Fade In</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{padding:10,borderColor:'black', borderRadius:10, borderWidth:1}}>Fade In</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{padding:10,borderColor:'black', borderRadius:10, borderWidth:1}}>Fade In</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{padding:10,borderColor:'black', borderRadius:10, borderWidth:1}}>Fade In</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{padding:10,borderColor:'black', borderRadius:10, borderWidth:1}}>Fade In</Text>
                    </TouchableOpacity></View>

                </View>
                <View style={{flex:1, alignContent:'space-around'}}>
                <Animated.View style={{ flex: 1, backgroundColor: 'red', opacity: this.state.value}} />
                <Animated.View style={{ flex: 1, backgroundColor: 'orange', opacity: this.state.value }} />
                <Animated.View style={{ flex: 1, backgroundColor: 'yellow', opacity: this.state.value }} />
                <Animated.View style={{ flex: 1, backgroundColor: 'green', opacity: this.state.value }} />
                <Animated.View style={{ flex: 1, backgroundColor: 'blue', opacity: this.state.value }} />
                <Animated.View style={{ flex: 1, backgroundColor: 'indigo', opacity: this.state.value }} />
                <Animated.View style={{ flex: 1, backgroundColor: 'purple', opacity: this.state.value }} />
                </View>
            </View>
        )
    }
}