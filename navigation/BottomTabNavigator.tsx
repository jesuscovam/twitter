import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ProfilePicture from "../components/ProfilePicture";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  HomeNavigatorParamList,
  TabTwoParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-notifications-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-mail" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={TabOneScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color={Colors.light.tint} />
          ),

          headerRight: () => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={30}
              color={Colors.light.tint}
            />
          ),

          headerLeft: () => (
            <ProfilePicture
              size={45}
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d64af525-8963-4c04-a284-932a526f3f93/dbi3qq8-31fb1a77-f013-4080-bdaa-685e703723f2.png/v1/fill/w_343,h_362,strp/don_cangrejo_by_orianaverarojas14_dbi3qq8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNjIiLCJwYXRoIjoiXC9mXC9kNjRhZjUyNS04OTYzLTRjMDQtYTI4NC05MzJhNTI2ZjNmOTNcL2RiaTNxcTgtMzFmYjFhNzctZjAxMy00MDgwLWJkYWEtNjg1ZTcwMzcyM2YyLnBuZyIsIndpZHRoIjoiPD0zNDMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OqRyE15DyeGGSBEG9f8owzSNbINka43jwVu7CMp8py0"
            />
          ),
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
