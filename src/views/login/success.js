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
  KeyboardAvoidingView,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Font } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('../../../assets/images/mapa-blanco.jpg');

export default class SuccessResetPassword extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
    },
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
          <View style={styles.formContainer}>
            <Text style={{color: 'rgb(101,101,101)', marginBottom: 30, fontSize: 14,  textAlign: 'center'}}>
              Tu contrasena ha sido restablecida correctamente
            </Text>
            <View>
              <Button
                titleStyle={{color: "#FFF"}}
                buttonStyle={styles.sendButton}
                title="Iniciar Sesion"
                onPress={()=> this.props.navigation.navigate('Home')}
              />
            </View>
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
    flex: 0.08,
    width: SCREEN_WIDTH,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  logoImageHeader: {
    width: 150,
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
  formContainer:{
    flex: 0.92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    width: 150,
    backgroundColor: "rgb(237, 44, 56)",
  },

});
