import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import News from '../views/news';

const NewsDrawerItem = createStackNavigator(
  {
    Playground: { screen: News },

  },
);

NewsDrawerItem.navigationOptions = {
  drawerLabel: 'Noticias',
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

export default NewsDrawerItem;
