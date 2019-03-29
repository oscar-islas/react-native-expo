import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Dashboard extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft :<Icon
    name="menu"
    size={30}
    type="entypo"
    containerStyle={{ marginLeft: 10 }}
    onPress={() => navigation.openDrawer()}
    />,
  });

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
