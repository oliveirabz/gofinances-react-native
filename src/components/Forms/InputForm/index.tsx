// React
import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

// Components
import { Input } from "../Input";

// Styles
import { Container, Error } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputForm = ({ control, name, error, ...rest }: Props) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
