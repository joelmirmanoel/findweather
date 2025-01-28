import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens/welcome';
import {HomeEmpty} from '../screens/homeEmpty';

const {Navigator, Screen} = createNativeStackNavigator();

export function Router() {
  return (
    <Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="welcome" component={WelcomeScreen} />
      <Screen name="homeEmpty" component={HomeEmpty} />
    </Navigator>
  );
}
