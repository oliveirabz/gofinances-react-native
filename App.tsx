// React
import React from "react";
import { StatusBar } from "react-native";

// React Navigator
import { Routes } from "./src/routes";

// Screens
import { SignIn } from "./src/screens/SignIn";

// Auth Context (React)
import { AuthProvider } from "./src/hooks/auth";

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
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}