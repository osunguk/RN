import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

const Data = require('../../static/data/shop.json')

// 힌트를 드리자면 클릭했을 때 상위 컴포넌트 함수 호출하고 상위 컴포넌트에 선택된 항목을 저장하면 됩니다.

// item={item}
// Checking={this._Checking}
// selectId={this.state.selectId}
// _selectId={this._selectId}

class Item extends React.Component {
  state = {
    select: false
  }
  render() {
    let check = ''
    if (this.state.select){
      if (this.props.item.id === this.props.selectId){
        check = '✅'
      } else if (this.state.select) {
        this.setState({
          select: false
        })
      }
    }
    
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 30, justifyContent: 'center' }}>
          <Text>{check}</Text>
        </View>
        <TouchableOpacity
          style={{ margin: 5, paddingTop: 3, paddingBottom: 3 }}
          onPress={() => {
            this.setState({
              select: true
            })
            this.props.Checking()
            this.props._selectId(this.props.item.id)
          }}
        >
          <Text style={[{ fontSize: 20, textAlign: 'left', color: this.state.select ? 'yellow' : 'white' }]}>{this.props.item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class NextBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.check ? false : true}
        style={{ borderWidth: 1, padding: 15, paddingLeft: 50, paddingRight: 50, borderRadius: 50, borderColor:'white' }}
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
  state = {
    Check: false,
    selectId: false
  }

  static navigationOptions = {
    headerShown: false
  }

  _Checking = () => {
    this.setState({
      Check: true
    })
  }

  _selectId = (id) => {
    this.setState({
      selectId: id
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
              // this.props.navigation.pop()
              // 팝업 창 띄우기
            }}
          >
            <Text style={{ padding: 20, color: 'yellow' }}>💡 채굴 팁 💡</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, color: 'white' }}>현재 장소는?</Text>
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.pop()
            }}
          >
            <Text style={{ color: 'white' }}>🔄</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 7, paddingLeft: 40, paddingRight: 40 }}>
          <View style={{ borderColor: 'gray', borderTopWidth: 1, borderBottomWidth: 1 }}>
            <FlatList
              refreshing={this.state.refreshing}
              data={Data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return (
                  <Item
                    item={item}
                    Checking={this._Checking}
                    selectId={this.state.selectId}
                    _selectId={this._selectId}
                  />
                )
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
          <NextBtn 
            check = {this.state.Check}
          />
        </View>
      </View>
    )
  }
}