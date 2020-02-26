import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  HomeScreen,
  QuoteDetailsScreen,
} from './../screens';
import { colors } from './../constants';

const MainNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Coin Market Cap',
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.ROYAL_BLUE,
      },
    },
  },
  QuoteDetailsScreen: {
    screen: QuoteDetailsScreen,
    navigationOptions: {
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.ROYAL_BLUE,
      },
    },
  },
}, {
  headerMode: 'screen',
  initialRouteName: 'HomeScreen' ,
});

const App = createAppContainer(MainNavigator);

export default App;
