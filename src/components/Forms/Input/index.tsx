// React
import React from "react";
import { TextInputProps } from "react-native";

// Styles
import { Container } from "./styles";

type Props = TextInputProps;

export const Input = ({ ...rest }: Props) => {
  return <Container {...rest} />;
};
