import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { observer, inject } from 'mobx-react'
import Test from '../components/showStore'

@inject('counter')
@observer
export default class simple extends Component {
  render() {
    const { counter } = this.props;
    return (
      <>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            Simple MobX Screen
          </Text>
          <Text style={{ fontSize: 20, fontStyle: 'italic', borderBottomWidth: 1 }}>{counter.number}</Text>
          <View style={{ flexDirection: 'row', margin: 20, alignSelf: 'center' }}>
            <Button
              title='Plus'
              onPress={counter.increase}
            />
            <Text>      </Text>
            <Button
              title='Minus'
              onPress={counter.decrease}
            />
          </View>


          <View style={{ flexDirection: 'row', margin: 20, alignSelf: 'center' }}>
            <Button
              title='go first'
              onPress={() => { this.props.navigation.navigate('StartScreen') }}
            />
            <Text>      </Text>
            <Button
              title='go next'
              onPress={() => { this.props.navigation.navigate('MobXTest2') }}
            />
          </View>
        </View>
        <Test />
      </>
    )
  }
}

// decorate(simple, {
//   number: observable,
//   increase: action,
//   decrease: action
// })

// export default observer(simple)