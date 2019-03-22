import React from 'react';
import { registerRootComponent, AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/views/login';
import ValidateUser from './src/views/login/screen2';

const SCREEN_WIDTH = Dimensions.get('window').width;


const AppNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    ValidateUser: {
      screen: ValidateUser,
    },
  },
  {
    initialRouteName: 'Login',
  }
);


export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  render() {
      return <AppNavigator />;
  }
}

registerRootComponent(AppContainer);
