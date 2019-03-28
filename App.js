import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Login from './src/views/login/login';
import Home from './src/views/home';
import ValidateUser from './src/views/login/validateUser';
import ValidateCode from './src/views/login/validateCode';
import NewPasswordForm from './src/views/login/newPasswordForm';
import SuccessResetPassword from './src/views/login/success';
import AuthLoadingScreen from './src/views/authLoadingScreen';
import { Icon } from 'react-native-elements';

import { createStackNavigator, createAppContainer, createSwitchNavigator  } from 'react-navigation';
const SCREEN_WIDTH = Dimensions.get('window').width;


const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => () => navigation.navigate('DrawerOpen')}
        />
      ),
    })
  },
  ValidateUserView: {
    screen: ValidateUser,
    navigationOptions: ({ navigation }) => ({
      title: 'Validar Usuario',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    })
  },
  ValidateCodeView: {
    screen: ValidateCode
  },
  NewPasswordFormView: {
    screen: NewPasswordForm
  },
  SuccessResetPasswordView: {
    screen: SuccessResetPassword
  },
});

const AuthStack = createStackNavigator({
  LoginView: {
    screen: Login
  },
  ValidateUserView: {
    screen: ValidateUser
  },
  ValidateCodeView: {
    screen: ValidateCode
  },
  NewPasswordFormView: {
    screen: NewPasswordForm
  },
  SuccessResetPasswordView: {
    screen: SuccessResetPassword
  },
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
