// React
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

// Assets
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";

// Styles
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
} from "./styles";

export const SignIn = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça o seu login com {"\n"} uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer></Footer>
    </Container>
  );
};
