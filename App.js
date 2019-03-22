import React from 'react';
import { registerRootComponent, AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD
import { View, Image, Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import Components from './src/drawer/components';
import Ratings from './src/drawer/ratings';
import Pricing from './src/drawer/pricing';
import Login from './src/drawer/login';
import Profile from './src/drawer/profile';
import Lists from './src/drawer/lists';
import Settings from './src/drawer/settings';
=======
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/views/login';
import ValidateUser from './src/views/login/screen2';
>>>>>>> a569489c56b9de1f7cbd58ee3ef3bd18a5d28ea0

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
