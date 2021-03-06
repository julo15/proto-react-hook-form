import styled from "@emotion/styled";
import { FieldValues } from "react-hook-form";
import { BriefFormValues, TaskValue } from "../Model/BriefFormValues";
import { UncontrolledFormFieldProps } from "./Shared";
import TextInput from "./TextInput";

type Props<TFieldValues extends FieldValues> = {
} & UncontrolledFormFieldProps<TFieldValues>;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const Task = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const {
    formController,
    name, // 'task'
    unregisterOnUnmount,
  } = props;

  const titleName = `${name}.title` as const;

  return (
    <TaskContainer>
      Task: {name}
      <TextInput
        formController={formController}
        name={titleName}
        unregisterOnUnmount={unregisterOnUnmount}
      />
    </TaskContainer>
  )
};

export default Task;
