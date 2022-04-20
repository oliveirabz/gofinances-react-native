// React
import React from "react";

// React Navigator (Stack)
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { SignIn } from "../screens/SignIn";

// Creating Stack Navigator
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
