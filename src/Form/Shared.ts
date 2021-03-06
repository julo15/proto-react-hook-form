import { useEffect } from "react";
import { FieldValues, UseFormRegister, UseFormUnregister, FieldPath } from "react-hook-form";

export type FormController<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  unregister: UseFormUnregister<TFieldValues>;
};

export type UncontrolledFormFieldProps<TFieldValues extends FieldValues, Path = FieldPath<TFieldValues>> = {
  formController: FormController<TFieldValues>;
  name: Path;
  unregisterOnUnmount?: boolean;
};

export function useUnregisterOnHide<TFieldValues extends FieldValues>(
  props: UncontrolledFormFieldProps<TFieldValues>
) {
  const { formController, name, unregisterOnUnmount } = props;
  const { unregister } = formController;
  useEffect(() => {
    // register occurs elsewhere
    return unregisterOnUnmount ? () => unregister(name) : undefined;
  }, []);
}
