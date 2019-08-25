import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(navigator);
