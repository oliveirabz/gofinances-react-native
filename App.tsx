// React
import React from "react";
import { StatusBar } from "react-native";

// React Navigator
import { NavigationContainer } from "@react-navigation/native";

// Expo
import AppLoading from "expo-app-loading";

// Google Fonts
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// Styles
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

// Routes
import { AppRoutes } from "./src/routes/app.routes";

import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <SignIn />
      </NavigationContainer>
    </ThemeProvider>
  );
}