import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default class Users extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Compenente para administrar a los usuarios</Text>
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
