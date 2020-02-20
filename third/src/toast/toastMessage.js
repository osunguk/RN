import React from 'react'
import { View, Text, Button } from 'react-native'
import Toast from 'react-native-root-toast'

export class toastMessage extends React.Component {
  static navigationOptions = {
    headerShown: false
  }

  state = {
    visible: false
  }
  // componentDidMount() {
  //   setTimeout(() => this.setState({
  //     visible: true
  //   }), 2000); // show toast after 2s

  //   setTimeout(() => this.setState({
  //     visible: false
  //   }), 5000); // hide toast after 5s
  // };
  _makeToast = () => {
    let toast = Toast.show('This is Toast msg', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {

      },
      onShown: () => {

      },
      onHide: () => {

      },
      onHidden: () => {

      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Text style={{ margin: 10 }}>Toast Message</Text>
        <Button
          title='show toast msg'
          onPress={()=> {
            this._makeToast()
          }}
        />
        {/* <Toast
          visible={this.state.visible}
          position={50}
          shadow={false}
          animation={false}
          hideOnPress={true}
        >
          This is a msg
        </Toast> */}
      </View>
    )
  }
}