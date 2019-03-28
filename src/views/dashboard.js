import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Compenente para ver el dashboard</Text>
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
