import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker'


const options = {
  noData: true,
  mediaType: "photo",
  title: 'Image Picker',
  customButtons: [{ name: 'name', title: 'custon title' }],
};

export default class imagePick extends Component {
  state = {
    avatarSource: ''
  }
  static navigationOptions = {
    headerShown: false
  }

  action = () => {
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        // const source = { uri: res.uri };
        this.setState({
          avatarSource: res.uri
        });
      }
    })
  }

  showImage = () => {
    if (this.state.avatarSource) {
      return (
        <Image
          style={{
            marginBottom: 10,
            marginTop: 10,
            width: 300,
            height: 300,
          }}
          source={{ uri: this.state.avatarSource }}
          resizeMode="contain"
        />
      )
    }
  }


  render() {
    
    return (
      <View style={{ marginTop: 20, flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
        <Text style={{ alignSelf: 'center' }}>up load image</Text>
        {this.showImage()}
        <Button
          title='up load Image'
          onPress={() => { this.action() }}
        />
      </View>
    )
  }
}