import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Dashboard from '../views/dashboard';

const DashboardDrawerItem = createStackNavigator(
  {
    Playground: { screen: Dashboard },

  },
);

DashboardDrawerItem.navigationOptions = {
  drawerLabel: 'Notificaciones',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="bell"
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

export default DashboardDrawerItem;
