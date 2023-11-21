import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Money from '../pages/Money';
import Store from '../pages/Store';
import CartScreen from '../pages/Order/CartScreen';
import { CustomTabBar } from '../components/CustomTab';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0
        }
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'list-alt',
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          tabBarIcon: 'local-restaurant'
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: 'attach-money',
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="Order" component={CartScreen} />
    </Stack.Navigator>
  );
}