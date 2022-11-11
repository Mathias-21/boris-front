import React from "react";
import { InputArea, InputBase, Label } from "./styles";
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";

interface InputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  label?: string;
}

export function Input({ name, control, placeholder, label }: InputProps) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputArea>
            {label && <Label>{label}</Label>}
            <InputBase
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </InputArea>
        )}
      />
      {/* <Container>
        <div>Hi</div>
      </Container> */}
    </>
  );
}
