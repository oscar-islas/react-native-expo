import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Users from '../views/users';

const UserDrawerItem = createStackNavigator(
  {
    UserView: { screen: Users },
  },
);

UserDrawerItem.navigationOptions = {
  drawerLabel: 'Usuarios',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="users"
      size={25}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="font-awesome"
      color={tintColor}
    />
  ),
};

export default UserDrawerItem;
