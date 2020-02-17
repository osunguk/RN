import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {SafeAreaView, StatusBar, Text, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

class Screen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color='blue'
        />
        <Button
          title='go choice'
          onPress={() => {
            this.props.navigation.navigate('choice')
          }}
        />
      </SafeAreaView>
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <Text style={styles.paragraph}>Dark Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
        <Button
          title='go choice'
          onPress={() => {
            this.props.navigation.navigate('choice')
          }}
        />
      </SafeAreaView>
    );
  }
}

export default createStackNavigator(
  {
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
  },
  {
    headerMode: 'none',
  }
);