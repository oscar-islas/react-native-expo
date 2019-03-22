import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/images/mapa.jpg');

export default class LoginScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      email: '',
      email_valid: true,
      password: '',
      login_failed: false,
      showLoading: false,
    };
  }

  async componentDidMount() {

    StatusBar.setHidden(true);
    await Font.loadAsync({
      georgia: require('../../../assets/fonts/Georgia.ttf'),
      regular: require('../../../assets/fonts/Montserrat-Regular.ttf'),
      light: require('../../../assets/fonts/Montserrat-Light.ttf'),
      bold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading,
    });
  }

  render() {

    const { email, password, email_valid, showLoading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.logoContainerHeader}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logoImageHeader}
          />
        </View>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          {this.state.fontLoaded ? (
            <View style={styles.loginView}>
              <View style={styles.loginInput}>
                <Input
                  leftIcon={
                    <Icon
                      name="user-o"
                      color="#acadad"
                      size={20}
                    />
                  }
                  containerStyle={{ marginVertical: 10, backgroundColor: '#FFF', borderRadius: 2}}
                  onChangeText={email => this.setState({ email })}
                  value={email}
                  inputStyle={{ marginLeft: 10, color: 'black' }}
                  keyboardAppearance="light"
                  placeholder="Usuario"
                  autoFocus={false}
                  autoCapitalize="none"
                  inputContainerStyle={{borderBottomWidth: 0}}
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref={input => (this.emailInput = input)}
                  onSubmitEditing={() => {
                    this.setState({ email_valid: this.validateEmail(email) });
                    this.passwordInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor="#acadad"
                  errorStyle={{ textAlign: 'center', fontSize: 12 }}
                  errorMessage={
                    email_valid ? null : 'Please enter a valid email address'
                  }
                />
                <Input
                  leftIcon={
                    <Icon
                      name="lock"
                      color="#acadad"
                      size={20}
                    />
                  }
                  containerStyle={{ marginVertical: 10, backgroundColor: '#FFF', borderRadius: 2}}
                  onChangeText={password => this.setState({ password })}
                  value={password}
                  inputStyle={{ marginLeft: 10, color: 'black' }}
                  secureTextEntry={true}
                  keyboardAppearance="light"
                  placeholder="Contrasena"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  inputContainerStyle={{borderBottomWidth: 0}}
                  returnKeyType="done"
                  ref={input => (this.passwordInput = input)}
                  blurOnSubmit={true}
                  placeholderTextColor="#acadad"
                />
              </View>
              <View style={styles.footerView}>
                <Button
                  title="Iniciar Sesion"
                  clear
                  activeOpacity={0.5}
                  titleStyle={{ color: '#000', fontSize: 15 }}
                  containerStyle={{ marginTop: -10 }}
                  onPress={this.submitLoginCredentials.bind(this)}
                  buttonStyle={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingLeft: 20,
                    backgroundColor: 'white'
                  }}
                  loading={showLoading}
                  loadingProps={{ size: 'small', color: '#000' }}
                  disabled={!email_valid && password.length < 8}
                />
                <Text
                style={{ color: 'white', marginTop: 10, textAlign: 'center' }}
                onPress={() => this.props.navigation.navigate('ListsDrawerItem')}>Olvidé mi contraseña</Text>
              </View>
            </View>
          ) : (
            <Text>Cargando...</Text>
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainerHeader:{
    width: SCREEN_WIDTH,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  logoImageHeader: {
    width: 200,
    height: 50
  },
  loginView: {
    backgroundColor: 'transparent',
    width: 250,
    height: 400,
  },
  loginTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'bold',
  },
  plusText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
  loginInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerView: {
    flex: 0.5,
    justifyContent: 'center',
  },
});
