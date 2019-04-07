import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import UserHeaderData from '../components/userHeaderDataComponent';

export default class Orders extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        type="entypo"
        containerStyle={{ marginLeft: 10 }}
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
    headerRight: (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
        <View style={{flexDirection: 'column', textAlign: 'right', marginRight: 10 }}>
          <Text style={{marginBottom: 2, textAlign: 'right'}}>Oscar Islas</Text>
          <Text style={{color: "red", textAlign: 'right'}}>Admin</Text>
        </View>
        <Image
          source={require('../../assets/images/profile_photo.jpg')}
          style={{ width: 30, height: 30, borderRadius: 15}}
          resizeMode="contain"
        />
      </View>
    ),
  });

  render() {

    return (
      <View style={styles.container}>
        <Text>Componente para administrar las ordenes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
