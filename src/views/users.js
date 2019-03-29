import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ScrollView, Image, SectionList } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';

const dummySearchBarProps = {
  showLoading: false,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClearText: () => console.log('cleared'),
  cancelButtonTitle: "Cancelar",
  onChangeText: text => console.log('text:', text),
};

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

    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Buscar"
            platform="ios"

            {...dummySearchBarProps}
          />
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
