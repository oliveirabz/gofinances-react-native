// React
import React from "react";
import { StatusBar } from "react-native";

// Routes
import { Routes } from "./src/routes";

// Auth Context (React)
import { AuthProvider, useAuth } from "./src/hooks/auth";

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

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
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