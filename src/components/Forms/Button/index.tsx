import React from "react";
import { Container, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";


interface Props extends RectButtonProps {
  title: string;
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
