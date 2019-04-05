import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Alert, StyleSheet, Button, View, Text, ScrollView, Image, SectionList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon, SearchBar, List, ListItem } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const dummySearchBarProps = {
  showLoading: false,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClearText: () => console.log('cleared'),
  cancelButtonTitle: "Cancelar",
  onChangeText: text => console.log('text:', text),
};

const headerTable = [
  {"title": "Nombre"},
  {"title": "Usuario"},
  {"title": "Correo"},
  {"title": "Rol"},
  {"title": "Pertenece"}
]

const UserRowItem = (props) => (
  <View>
    <TouchableHighlight onLongPress={() => Alert.alert('hello')}>
      <View>
        <Text style={styles.item}>{props.name}</Text>
      </View>

    </TouchableHighlight>
  </View>
);

let arrayholder = [];

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
    };
    this.arrayholder = [];
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  makeRemoteRequest = () => {
    const res = {"results":[
      {
        "gender":"female",
        "name":{"title":"ms","first":"Iran","last":"Sanchez"},
        "location":{"street":"8404 musvitvej","city":"gjerlev","state":"syddanmark","postcode":14871,"coordinates":{"latitude":"-25.1487","longitude":"-55.0211"},
        "timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},
        "email":"iran.sanchez@bepensa.com",
        "login":{"uuid":"a7a690ac-8625-4d3e-a4d8-3e094048d628","username":"organicleopard740","password":"looser","salt":"JsbtFYxk","md5":"d0b59c9a6999b7d69a0a1cbaa2a08d0a","sha1":"96a6a06613eeeb1cff99390235d07ec7a83d65b5","sha256":"7b0b2626de0c5bfd7f05ca8c080996dd8768d631b712affaed8d885d7a581dae"},
        "dob":{"date":"1975-11-26T13:30:01Z","age":43},
        "registered":{"date":"2016-07-28T03:47:40Z","age":2},
        "phone":"36898498",
        "cell":"46107815",
        "id":{"name":"CPR","value":"139344-8218"},
        "picture":{"large":"https://randomuser.me/api/portraits/women/37.jpg","medium":"https://randomuser.me/api/portraits/med/women/37.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/37.jpg"},"nat":"DK"
      },
      {
        "gender":"female",
        "name":{"title":"ms","first":"Patricia","last":"Araiza"},
        "location":{"street":"8404 musvitvej","city":"gjerlev","state":"syddanmark","postcode":14871,"coordinates":{"latitude":"-25.1487","longitude":"-55.0211"},
        "timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},
        "email":"patricia.araiza@bepensa.com",
        "login":{"uuid":"a7a690ac-8625-4d3e-a4d8-3e094048d628","username":"organicleopard740","password":"looser","salt":"JsbtFYxk","md5":"d0b59c9a6999b7d69a0a1cbaa2a08d0a","sha1":"96a6a06613eeeb1cff99390235d07ec7a83d65b5","sha256":"7b0b2626de0c5bfd7f05ca8c080996dd8768d631b712affaed8d885d7a581dae"},
        "dob":{"date":"1975-11-26T13:30:01Z","age":43},
        "registered":{"date":"2016-07-28T03:47:40Z","age":2},
        "phone":"36898498",
        "cell":"46107815",
        "id":{"name":"CPR","value":"139344-8218"},
        "picture":{"large":"https://randomuser.me/api/portraits/women/7.jpg","medium":"https://randomuser.me/api/portraits/med/women/7.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/7.jpg"},"nat":"DK"
      },
      {
        "gender":"male","name":{"title":"mr","first":"Mateo","last":"Hernandez"},"location":{"street":"6441 servetstraat","city":"hillegom","state":"zeeland","postcode":56847,"coordinates":{"latitude":"-58.5169","longitude":"10.4908"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"mateo.hernandez@bepensa.com","login":{"uuid":"88468bdb-f1f3-491c-beda-245013e05aa1","username":"angrydog373","password":"lucky","salt":"AJbcjuir","md5":"6d630f499322cb63554ce457db9c101f","sha1":"7a3fe8cdb065f3c7d5691140f62f937a37e60d6b","sha256":"6dfec8cccedeb6ff4f7ebd55429c11c9a9e44e7ad758597733564d19a8e1d810"},"dob":{"date":"1946-07-02T16:24:36Z","age":72},"registered":{"date":"2004-01-16T21:25:14Z","age":15},"phone":"(082)-136-4428","cell":"(966)-192-0839","id":{"name":"BSN","value":"36612572"},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"NL"
      },
      {
        "gender":"male","name":{"title":"mr","first":"Julián","last":"Gutierrez"},"location":{"street":"6441 servetstraat","city":"hillegom","state":"zeeland","postcode":56847,"coordinates":{"latitude":"-58.5169","longitude":"10.4908"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"julian.gutierrez@bepensa.com","login":{"uuid":"88468bdb-f1f3-491c-beda-245013e05aa1","username":"angrydog373","password":"lucky","salt":"AJbcjuir","md5":"6d630f499322cb63554ce457db9c101f","sha1":"7a3fe8cdb065f3c7d5691140f62f937a37e60d6b","sha256":"6dfec8cccedeb6ff4f7ebd55429c11c9a9e44e7ad758597733564d19a8e1d810"},"dob":{"date":"1946-07-02T16:24:36Z","age":72},"registered":{"date":"2004-01-16T21:25:14Z","age":15},"phone":"(082)-136-4428","cell":"(966)-192-0839","id":{"name":"BSN","value":"36612572"},"picture":{"large":"https://randomuser.me/api/portraits/men/58.jpg","medium":"https://randomuser.me/api/portraits/med/men/58.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/58.jpg"},"nat":"NL"
      }
    ]};
     this.setState({
       data: res.results,
       error: res.error || null,
       loading: false,
     })
     arrayholder = res.results
  };

  componentDidMount(){
    this.makeRemoteRequest();
  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Buscar"
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

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
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
              />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
          <TouchableOpacity
            style={styles.addButtonList}
            onPress={() => navigate('UserFormView', { title: 'Crear usuario'} )}>
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
