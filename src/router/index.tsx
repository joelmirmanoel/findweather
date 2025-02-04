import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {WelcomeScreen, SearchScreen, HomeEmpty} from '../screens';
import {Theme} from '../theme/styles.ts';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export function Router() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="tabs" component={RouterTabs} />
      {/*<Stack.Screen name="search" component={SearchScreen} />*/}
    </Stack.Navigator>
  );
}

export function RouterTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="homeEmpty"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: Theme.colors.dark,
          borderTopWidth: 0,
          paddingHorizontal: 40,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: Theme.fonts.bold,
        },
        tabBarActiveTintColor: Theme.colors.white,
        tabBarInactiveTintColor: Theme.colors.gray500,
      }}>
      <Tabs.Screen
        name="homeEmpty"
        component={HomeEmpty}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                color={focused ? Theme.colors.white : Theme.colors.gray500}
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="search1"
                color={focused ? Theme.colors.white : Theme.colors.gray500}
                size={24}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export function useNavigator() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return navigation;
}
