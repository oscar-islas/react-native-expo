import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { NavigationActions, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';


import Login from './src/views/login/login';
import Home from './src/views/home';
import ValidateUser from './src/views/login/validateUser';
import ValidateCode from './src/views/login/validateCode';
import NewPasswordForm from './src/views/login/newPasswordForm';
import SuccessResetPassword from './src/views/login/success';
import AuthLoadingScreen from './src/views/authLoadingScreen';

import Dashboard from './src/drawers/dashboard';
import Users from './src/drawers/users';
import Orders from './src/drawers/orders';
import News from './src/drawers/news';
import Notifications from './src/drawers/notifications';

import UserForm from './src/views/user/userForm';

import { Icon, Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: 'rgb(229, 225, 225)' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./assets/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View>
      <DrawerItems style={{ paddingLeft: 10, borderBottomWidth: 10, borderColor: '#FFF' }} {...props} />
      <Button
        icon={
          <Icon
            name="power-off"
            size={15}
            color="white"
            type="font-awesome"
          />
        }
        title="Cerrar Sesion"
        buttonStyle={styles.btnLogout}
        containerStyle={{flexDirection: 'row', }}
        titleStyle={{textAlign: 'left', marginLeft: 10, marginRight: 10}}
        onPress={() => props.navigation.navigate('LoginView') }/>
    </View>
  </View>
);

const MenuButton = (
  <Icon
    name="menu"
    size={30}
    type="entypo"
    containerStyle={{ marginLeft: 10 }}
    onPress={() => this.props.navigate('DrawerOpen')}
  />
);

const MainRoot = createDrawerNavigator(
  {
    DashboardView: {
      screen: Dashboard,
    },
    OrdersViews: {
      screen: Orders,
    },
    UserView: {
      screen: Users,
    },
    NotificationsView: {
      screen: Notifications,
    },
    NewsView: {
      screen: News,
    },
  },
  {
    initialRouteName: 'DashboardView',
    contentOptions: {
      activeTintColor: '#FFF',
      activeBackgroundColor: 'rgb(237,44,56)',
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

const AppStack = createStackNavigator({
  UserFormView: {
    screen: UserForm,
  },
});

const AuthStack = createStackNavigator({
  LoginView: {
    screen: Login
  },
  ValidateUserView: {
    screen: ValidateUser
  },
  ValidateCodeView: {
    screen: ValidateCode
  },
  NewPasswordFormView: {
    screen: NewPasswordForm
  },
  SuccessResetPasswordView: {
    screen: SuccessResetPassword
  },
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainRoot,
    Auth: AuthStack,
    AppFlow: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },{
  	navigationOptions: ({ navigation }) => ({
  		title: 'Dashboard',
  		headerLeft : <MenuButton navigate={navigation.navigate} />,
  	}),
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogout: {
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 0,
    backgroundColor: "rgb(237,44,56)",
  },
});
