import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Image, SectionList, TouchableOpacity, BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';


const BackButton = (
  <Icon
    name="arrow-left"
    size={30}
    type="font-awesome"
    containerStyle={{ marginLeft: 10 }}
    onPress={() => this.props.navigate('UserView')}
  />
);

export default class UserForm extends Component {

  constructor(props){
      super(props)
      this.handleBackPress = this.handleBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('UserView');
    return true;
  };

  static navigationOptions = ({navigation}) => ({
      title: navigation.getParam('title', 'DefaultTitle'),
      headerLeft :(   <Icon
          name="arrow-left"
          size={30}
          type="material-community"
          containerStyle={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('UserView')}
        />),
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>User Form</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  addButtonList : {
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor:'#42b05c',
    borderRadius:100,
    elevation: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
