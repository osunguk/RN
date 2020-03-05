import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FadeInOut from './FadeInOut';
import Rotate from './Rotate'
import SlideInLeft from './SlideInLeft'

export default class animate extends React.Component {
    state = {
        animation: '',
    }

    render() {
        let classShow
        switch (this.state.animation) {
            case 'fadeInOut':
                classShow = <FadeInOut />
                break;

            case 'rotate':
                classShow = <Rotate />
                break;

            case 'slideInLeft':
                classShow = <SlideInLeft />
                break;

            default:
                classShow = null
        }


        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center' }}>Animation Test</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {
                            this.setState({
                                animation: 'fadeInOut'
                            })
                        }}
                    >
                        <Text style={{ padding: 10, borderColor: 'black', borderRadius: 10, borderWidth: 1 }}>Fade In & out</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {
                            this.setState({
                                animation: 'rotate'
                            })
                        }}
                    >
                        <Text style={{ padding: 10, borderColor: 'black', borderRadius: 10, borderWidth: 1 }}>Rotate</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {
                            this.setState({
                                animation: 'slideInLeft'
                            })
                        }}
                    >
                        <Text style={{ padding: 10, borderColor: 'black', borderRadius: 10, borderWidth: 1 }}>Slide In Left</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{ padding: 10, borderColor: 'black', borderRadius: 10, borderWidth: 1 }}>Fade In</Text>
                    </TouchableOpacity></View>
                    <View style={{ flex: 1 }}><TouchableOpacity
                        onPress={() => {

                        }}
                    >
                        <Text style={{ padding: 10, borderColor: 'black', borderRadius: 10, borderWidth: 1 }}>Fade In</Text>
                    </TouchableOpacity></View>
                </View>
                <View style={{ flex: 1 }}>
                    {classShow}
                </View>
            </View>
        )
    }
}