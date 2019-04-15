import { createStackNavigator } from 'react-navigation';
import { Splash, Home, Profile } from '../src/screens';

const AppNavigator = createStackNavigator({
  Splash: { screen: Splash },
  Home: { screen: Home },
  Profile: { screen: Profile },
},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  })
export default AppNavigator;