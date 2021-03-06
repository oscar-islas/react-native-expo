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

export default class NewPasswordForm extends Component {
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
          <KeyboardAvoidingView style={styles.formContainer} behavior="padding" enabled>
            <Text
              style={{ color: 'rgb(101,101,101)', marginBottom: 20, fontSize: 18,  textAlign: 'center' }}
            >Restablecer Contrasena</Text>
            <Text
              style={{ color: 'rgb(101,101,101)', marginBottom: 20, fontSize: 14, paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}>
              Ingresa tu nueva contrasena conformada por 8 caracteres
            </Text>
            <View>
              <Input
                inputStyle={{ width: 300, marginLeft: 10, color: '#FFF' }}
                placeholderTextColor="#F1F1F1"
                secureTextEntry={true}
                inputContainerStyle={{borderBottomWidth: 0}}
                containerStyle={{ width: 300, marginVertical: 10, marginBottom: 10, backgroundColor: 'rgb(101,101,101)', borderRadius: 2}}
                placeholder='Nueva Contrasena'
              />
              <Input
                inputStyle={{ width: 300, marginLeft: 10, color: '#FFF' }}
                placeholderTextColor="#F1F1F1"
                secureTextEntry={true}
                inputContainerStyle={{borderBottomWidth: 0}}
                containerStyle={{ width: 300, marginVertical: 10, marginBottom: 40, backgroundColor: 'rgb(101,101,101)', borderRadius: 2}}
                placeholder='Confirma la contrasena'
              />
            </View>
            <View>
              <Button
                titleStyle={{color: "#FFF"}}
                buttonStyle={styles.sendButton}
                title="Restablecer Contrasena"
                onPress={()=> this.props.navigation.navigate('SuccessResetPasswordView')}
              />
            </View>
          </KeyboardAvoidingView>
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
    width: 200,
    backgroundColor: "rgb(237, 44, 56)",
  },
});
