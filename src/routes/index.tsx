// React
import React from "react";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";

// Routes
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

// Auth Context
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}