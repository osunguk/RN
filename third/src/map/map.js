import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'

export default class map extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <Text>map test</Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}