import styled from "@emotion/styled";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { FieldPath, FieldValues, UseFormRegister, UseFormUnregister } from "react-hook-form";
import { UncontrolledFormFieldProps, useUnregisterOnHide } from "./Shared";

type Props<TFieldValues extends FieldValues> = {
} & UncontrolledFormFieldProps<TFieldValues>;

const Input = styled.input`

`;

const TextInput = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const {
    formController,
    name,
  } = props;

  const { register } = formController;

  useUnregisterOnHide(props);

  // register needs to receive 'task.title'
  return (
    <Input {...register(name)} />
  );
}

export default TextInput;
