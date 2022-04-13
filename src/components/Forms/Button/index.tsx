import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
