import React, { Component } from 'react'
import { Text, View, Button, Image, PermissionsAndroid } from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'
import { create } from 'apisauce'
import { todoApi } from '../URL/URL'
import { ScrollView } from 'react-native-gesture-handler'


const api = create({
  baseURL: todoApi
})

export default class fijleupload extends Component {
  state = {
    photos: []
  }
  static navigationOptions = {
    headerShown: false
  }

  // componentDidMount() {
  //   PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //     {
  //       title: ' Cool Photo App Camera Permission',
  //       message:
  //         'Cool Photo App needs access to your camera ' +
  //         'so you can take awesome pictures.',
  //       buttonNeutral: 'Ask Me Later',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     }
  //   )
  // }

  action1 = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos'
    })
      .then(r => {
        console.log(r)
        this.setState({
          photos: r.edges
        })
      }).catch(e => {
        console.warn(e)
      })
    console.log(this.state)
  }

  render() {
    return (
      <View style={{ marginTop: 20, flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
        <Text>up load</Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title='file load test'
            onPress={() => { this.action1() }}
          />
          <ScrollView>
            {this.state.photos.map((p, i) => {
              return (
                <Image
                  key={i}
                  resizeMode='contain'
                  style={{
                    width: 300,
                    height: 300,
                  }}
                  source={{ uri: p.node.image.uri }}
                />
              )
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}