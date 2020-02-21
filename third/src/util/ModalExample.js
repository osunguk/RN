import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, Button } from 'react-native';
import { Dev } from './devModal'

export default class ModalExample extends Component {
  state = {
    modalVisible: false,

    dev: true,
    visible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    if (this.state.dev) {
      return (
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
          <Button
            title='call modal'
            onPress={() => {
              this.setState({
                visible: !this.state.visible
              })
            }}
          />
          <View>
            <Dev
              visible={this.state.visible}
              test='test'
            />
          </View>
        </View>
      )
    } else {
      return (
        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
}