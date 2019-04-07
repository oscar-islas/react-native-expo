import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class  UserHeaderData extends Component {
  render() {
    return(
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
        <View style={{flexDirection: 'column', textAlign: 'right', marginRight: 10 }}>
          <Text style={{marginBottom: 2, textAlign: 'right'}}>Oscar Islas</Text>
          <Text style={{color: "red", textAlign: 'right'}}>Admin</Text>
        </View>
        <Avatar
          rounded
          source={{
            uri:
              'https://randomuser.me/api/portraits/med/men/65.jpg',
          }}
        />
      </View>
    )
  }
}
