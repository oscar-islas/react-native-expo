import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Image, SectionList, TouchableOpacity, BackHandler, KeyboardAvoidingView } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { Header } from 'react-navigation';


const BackButton = (
  <Icon
    name="arrow-left"
    size={30}
    type="font-awesome"
    containerStyle={{ marginLeft: 10 }}
    onPress={() => this.props.navigate('UserView')}
  />
);

const focus = () => {
  this.input.focus();
}

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
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 40} style={styles.formContainer} behavior="padding" enabled>
          <ScrollView>
            <View>
              <Input
                inputStyle={styles.inputForm}
                placeholderTextColor="#F1F1F1"
                label="Nombre(s)"
                labelStyle={styles.labelForm}
                inputContainerStyle={styles.inputContainerForm}
                containerStyle={styles.containerForm}
                returnKeyType='next'
                onSubmitEditing={() => {this.lastname.focus()}}
              />
              <Input
                inputStyle={styles.inputForm}
                placeholderTextColor="#F1F1F1"
                label="Apellidos"
                labelStyle={styles.labelForm}
                inputContainerStyle={styles.inputContainerForm}
                containerStyle={styles.containerForm}
                returnKeyType='next'
                ref={(input) => this.lastname = input}
                onSubmitEditing={() => this.username.focus()}
              />
              <Input
                inputStyle={styles.inputForm}
                placeholderTextColor="#F1F1F1"
                label="Usuario"
                labelStyle={styles.labelForm}
                inputContainerStyle={styles.inputContainerForm}
                containerStyle={styles.containerForm}
                returnKeyType='next'
                ref={ (input) => this.username = input}
                onSubmitEditing={() => this.email.focus()}
              />
              <Input
                inputStyle={styles.inputForm}
                placeholderTextColor="#F1F1F1"
                label="Email"
                labelStyle={styles.labelForm}
                inputContainerStyle={styles.inputContainerForm}
                containerStyle={styles.containerForm}
                returnKeyType='next'
                ref={ (input) => this.email = input}
                onSubmitEditing={() => this.password.focus()}
              />
              <Input
                inputStyle={styles.inputForm}
                placeholderTextColor="#F1F1F1"
                label="Contrasena"
                labelStyle={styles.labelForm}
                inputContainerStyle={styles.inputContainerForm}
                containerStyle={styles.containerForm}
                returnKeyType='next'
                ref={ (input) => this.password = input}
              />
              <Button
                titleStyle={{color: "#FFF"}}
                buttonStyle={styles.sendButton}
                title="Guardar Usuario"
                onPress={() => alert('hola') }
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
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
  inputContainerForm: {
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  inputForm: {
    marginLeft: 10,
    color: '#000'
  },
  containerForm: {
    marginVertical: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderRadius: 2
  },
  labelForm: {
    marginBottom: 5,
    color: '#000',
  },
  formContainer:{
    flex: 1,
  },
});
