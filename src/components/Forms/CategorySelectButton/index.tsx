// React
import React from "react";

// Styles
import { Container, Category, Icon } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

export const CategorySelectButton = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};
