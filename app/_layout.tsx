import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Auto-import your screens (they must export default)
import ListScreen from "./(tabs)/lists";
import MapScreen from "./(tabs)/maps";
import ProfileScreen from "./(tabs)/profiles";

const Tab = createBottomTabNavigator();

export default function Layout() {
  const screenOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: "#007AFF",
    tabBarInactiveTintColor: "gray",
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
