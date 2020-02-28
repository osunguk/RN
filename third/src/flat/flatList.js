import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'


const Data = require('../static/data/shop.json')
class Item extends React.Component {
  state = {
    select: false
  }

  render() {
    const { itemId, itemName, isSelected, OnSelect } = this.props
    let check = ''
    if (isSelected) check = '✅'

    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 30, justifyContent: 'center' }}>
          <Text>{check}</Text>
        </View>
        <TouchableOpacity
          style={{ margin: 5, paddingTop: 3, paddingBottom: 3 }}
          onPress={() => {
            OnSelect(itemId)
          }}
        >
          <Text style={{ fontSize: 20, textAlign: 'left', color: isSelected ? 'yellow' : 'white' }}>{itemName}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class NextBtn extends React.Component {
  render() {
    const { selectId } = this.props

    return (
      <TouchableOpacity
        disabled={selectId ? false : true}
        style={{ borderWidth: 1, padding: 15, paddingLeft: 50, paddingRight: 50, borderRadius: 50, borderColor: 'white' }}
        onPress={() => {
          //
        }}
      >
        <Text style={{ fontSize: 16, color: 'white' }}>다음</Text>
      </TouchableOpacity>
    )
  }
}


export default class flatList extends React.Component {
  static navigationOptions = {
    headerShown: false
  }
  
  state = {
    selectId: false,
    refreshing: false,
    DataList: [],
  }

  componentDidMount(){
    const data = require('../static/data/shop.json')
    this.setState({
      DataList: data
    })
  }

  OnSelect = (id) => {
    this.setState({
      selectId: id
    })
  }

  OnRefresh = () => {
    const data = require('../static/data/shop.json')
    this.setState({
      selectId: false,
      refreshing: true,
      DataList: data.shuffle(),
    }, () => {
      this.setState({
        refreshing: false,  
      })
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#013369' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.pop()
            }}
          >
            <Text style={{ padding: 20, color: 'white' }}>❌</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('miningTip')
            }}
          >
            <Text style={{ padding: 20, color: 'yellow' }}>💡 채굴 팁 💡</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, color: 'white' }}>현재 장소는?</Text>
          <TouchableOpacity
            onPress={() => {
              this.OnRefresh()
            }}
          >
            <Text style={{ color: 'white' }}>🔄</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 7, paddingLeft: 40, paddingRight: 40 }}>
          <View style={{ borderColor: 'gray', borderTopWidth: 1, borderBottomWidth: 1 }}>
            <FlatList
              refreshing={this.state.refreshing}
              onRefresh={this.OnRefresh}
              data={this.state.DataList}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return (
                  <Item
                    itemId={item.id}
                    itemName={item.name}
                    isSelected={this.state.selectId === item.id}
                    OnSelect={this.OnSelect}
                  />
                )
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
          <NextBtn
            selectId={this.state.selectId}
          />
        </View>
      </View>
    )
  }
}