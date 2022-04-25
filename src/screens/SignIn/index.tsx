// React
import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// Auth Context (React)
import { useAuth } from "../../hooks/auth";

// Assets
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

// Components
import { SignInSocialButton } from "../../components/SignInSocialButton";

// Styles
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Could not connect with Google account");
    } finally {
      setIsLoading(false);
    } // if a perform error shows up, just put the setIsLoading inside of catch {} and delete the finally {}
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Could not connect with Apple account");
    } finally {
      setIsLoading(false);
    } // if a perform error shows up, just put the setIsLoading inside of catch {} and delete the finally {}
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Control your {"\n"} finances in a very {"\n"} simple way
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Log in with one {"\n"} of the accounts below
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Sign in with Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title="Sign in with Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  );
};