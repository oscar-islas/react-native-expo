import React from 'react';
import { registerRootComponent, AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import { NavigationActions, createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Dashboard from '../drawers/dashboard';
import Users from '../drawers/users';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#FFF' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const MainRoot = createDrawerNavigator(
  {
    DashboardView: {
      screen: Dashboard,
    },
    UserView: {
      screen: Users,
    },
  },
  {
    initialRouteName: 'DashboardView',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#000',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

const HomeContainer = createAppContainer(MainRoot);

export default class Home extends React.Component {

  render() {
    return <HomeContainer />;
  }
}
