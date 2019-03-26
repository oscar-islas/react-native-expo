import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Font } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('../../../assets/images/mapa.jpg');

export default class ValidateUser extends Component {
  static navigationOptions = {
    title: "Restablecer Contraseña",
  }
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <View style={styles.logoContainerHeader}>
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.logoImageHeader}
            />
          </View>
          <Text
            style={{ color: 'white', marginTop: 10, textAlign: 'center' }}
          >Recuperar Contrasena</Text>
          <View>
            <Input
              inputStyle={{ width: 300, marginLeft: 10, color: '#FFF' }}
              placeholderTextColor="#acadad"
              containerStyle={{ width: 300, marginVertical: 10, backgroundColor: '#000', borderRadius: 2}}
              placeholder='Usuario'
            />
          </View>
          <View>
            <Button
              titleStyle={{color: "black"}}
              buttonStyle={styles.sendButton}
              title="Enviar"
            />
          </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainerHeader:{
    flex: 0.1,
    width: SCREEN_WIDTH,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  logoImageHeader: {
    width: 170,
    height: 40,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
  },
  sendButton: {
    width: 200,
    backgroundColor: "white",
  },
});
