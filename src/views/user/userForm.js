import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, SectionList, TouchableOpacity, BackHandler, KeyboardAvoidingView } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { Header } from 'react-navigation';
import t from 'tcomb-form-native';
import _ from 'lodash';

const BackButton = (
  <Icon
    name="arrow-left"
    size={30}
    type="font-awesome"
    containerStyle={{ marginLeft: 10 }}
    onPress={() => this.props.navigate('UserView')}
  />
);

const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const focus = () => {
  this.input.focus();
}

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the text color
stylesheet.select.normal.borderWidth = 2;
stylesheet.select.normal.borderRadius = 4;
stylesheet.select.normal.borderColor = '#cccccc';


const Email = t.refinement(t.String, email => regEmail.test(email) && email.length > 0);

Email.getValidationErrorMessage = email => {
  if(!email){
    return 'Este campo es requerido';
  }else if(!regEmail.test(email)){
    return 'Ingresa un correo electronico valido';
  }
}

const Form = t.form.Form;

const Roles = t.enums({
    '1': 'Administrador',
    '2': 'Cliente',
    '3': 'Proveedor'
}, 'Rol');

const User = t.struct({
  name: t.String,
  lastname: t.String,
  username: t.String,
  email: Email,
  password: t.String,
  role: Roles,
});

const options = {
  stylesheet: stylesheet,
  fields: {
    name: {
      label: 'Nombre(s)',
      error: 'Este campo es requerido'
    },
    lastname: {
      label: 'Apellidos',
      error: 'Este campo es requerido'
    },
    username: {
      label: 'Usuario',
      error: 'Este campo es requerido'
    },
    email: {
      label: 'Correo electronico',
    },
    password: {
      label: 'Contrasena',
      error: 'Este campo es requerido',
      password: true,
      secureTextEntry: true
    },
    rpassword: {
      label: 'Repite tu contrasena'
    },
    role: {
      label: 'Rol',
      nullOption: {value: '', text: 'Selecciona un rol para el usuario'}
    },
  },
};

export default class UserForm extends Component {

  constructor(props){
      super(props)
      this.handleBackPress = this.handleBackPress.bind(this);
      this.state = {
        initialvalues: {
          role:'2',
        },
      }
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

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

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
            <View style={{paddingLeft: 15, paddingRight: 15}}>
            <Form
              ref={c => this._form = c} // assign a ref
              type={User}
              options={options}
              value={this.state.initialvalues}
            />
            <Button
              title="Guardar"
              onPress={this.handleSubmit}
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
    paddingTop: 15,
    marginBottom: 10
  },
  selectInput: {
    borderWidth: 2,
    backgroundColor: '#000'
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
