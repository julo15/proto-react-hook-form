import styled from "@emotion/styled";
import { FieldPath, FieldValues } from "react-hook-form";
import { BriefFormValues, TaskValue } from "../Model/BriefFormValues";
import { FormController, UncontrolledFormFieldProps } from "./Shared";
import TextInput from "./TextInput";

type Props<TFieldValues extends FieldValues> = {
  descriptionName: FieldPath<TFieldValues>;
  formController: FormController<TFieldValues>;
  titleName: FieldPath<TFieldValues>;
  unregisterOnUnmount?: boolean;
};

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const Task = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const {
    descriptionName,
    formController,
    titleName,
    unregisterOnUnmount,
  } = props;

  return (
    <TaskContainer>
      Task
      <TextInput
        formController={formController}
        name={titleName}
        unregisterOnUnmount={unregisterOnUnmount}
      />
      <TextInput
        formController={formController}
        name={descriptionName}
        unregisterOnUnmount={unregisterOnUnmount}
      />
    </TaskContainer>
  )
};

export default Task;
