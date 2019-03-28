import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Dashboard from '../views/dashboard';

const DashboardDrawerItem = createStackNavigator(
  {
    Playground: { screen: Dashboard },
  },
  {
    headerMode: 'none',
  }
);

DashboardDrawerItem.navigationOptions = {
  drawerLabel: 'Dashboard',
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

export default DashboardDrawerItem;
