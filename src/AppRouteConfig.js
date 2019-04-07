import { createStackNavigator } from 'react-navigation';
import { Home, Profile } from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile },
    }, {
        initialRouteName: 'Home',
        // headerMode: 'none'
    }
)

export default AppNavigator;

