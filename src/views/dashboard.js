import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import UserHeaderData from '../components/userHeaderDataComponent';

export default class Dashboard extends Component {

  componentWillMount(){
    this.props.navigation.setParams({headerOptionsUserData: false});
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft :<Icon
    name="menu"
    size={30}
    type="entypo"
    containerStyle={{ marginLeft: 10 }}
    onPress={() => navigation.openDrawer()}
    />,
    headerRight: navigation.getParam('headerOptionsUserData') ? null : (<UserHeaderData />),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Componente para ver el dashboard</Text>
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
