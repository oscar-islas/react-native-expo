import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Login from './src/views/login/login';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
const SCREEN_WIDTH = Dimensions.get('window').width;


const AppContainer = createAppContainer(Login);

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
