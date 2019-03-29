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
  drawerLabel: 'Users',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="email"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default UserDrawerItem;
