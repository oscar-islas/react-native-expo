import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Image, SectionList, TouchableOpacity } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

const dummySearchBarProps = {
  showLoading: false,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClearText: () => console.log('cleared'),
  cancelButtonTitle: "Cancelar",
  onChangeText: text => console.log('text:', text),
};

const UserRowItem = (props) => (
  <View>
    <Text style={styles.item}>{props.header}:{props.name}</Text>
    <Text style={styles.item}>{props.header}:{props.name}</Text>
    <Text style={styles.item}>{props.header}:{props.name}</Text>
    <Text style={styles.item}>{props.header}:{props.name}</Text>
    <Text style={styles.item}>{props.header}:{props.name}</Text>
  </View>
);

export default class Users extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft : <Icon
      name="menu"
      size={30}
      type="entypo"
      containerStyle={{ marginLeft: 10 }}
      onPress={() => navigation.openDrawer()}
    />,
    headerRight: (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
        <View style={{flexDirection: 'column', textAlign: 'right', marginRight: 10 }}>
          <Text style={{marginBottom: 2, textAlign: 'right'}}>Oscar Islas</Text>
          <Text style={{color: "red", textAlign: 'right'}}>Admin</Text>
        </View>
        <Image
          source={require('../../assets/images/profile_photo.jpg')}
          style={{ width: 30, height: 30, borderRadius: 15}}
          resizeMode="contain"
        />
      </View>
    ),
  });

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Buscar"
            platform="ios"

            {...dummySearchBarProps}
          />
        <SectionList
          sections={[
            {title: 'D', data: [{ name:'Oswaldo', header:'Nombre'}]},
            {title: 'J', data: [{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'}, { name:'Oswaldo', header:'Nombre'}, { name:'Oswaldo', header:'Nombre'}, { name:'Oswaldo', header:'Nombre'}]},
            {title: 'O', data: [{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'}]},
            {title: 'I', data: [{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'},{ name:'Oswaldo', header:'Nombre'}]}
          ]}
          renderItem={({item}) => <UserRowItem {...item}/>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
          <TouchableOpacity
            style={styles.addButtonList}
            onPress={() => navigate('UserFormView', { title: 'Agregar Usuario'} )}>
            <Icon name="plus"
              size={20}
              type="font-awesome"
              color="#FFF" />
        </TouchableOpacity>
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
