import styled from "@emotion/styled";
import { FieldPath, FieldValues } from "react-hook-form";
import Task from "../Form/Task";
import { BriefFormValues, TaskValue } from "../Model/BriefFormValues";
import { FormController, UncontrolledFormFieldProps } from "../Form/Shared";

type Props = {
  formController: FormController<BriefFormValues>;
  name: 'task' | 'otherTask' | `tasks.${number}`;
  unregisterOnUnmount?: boolean;
};

const MainTaskContainer = styled.div`
  display: flex;
`;

const MainTask = (props: Props) => {
  const {
    formController,
    name,
    unregisterOnUnmount,
  } = props;

  return (
    <Task
      descriptionName={`${name}.description` as const}
      formController={formController}
      titleName={`${name}.title` as const}
      unregisterOnUnmount={unregisterOnUnmount}
    />
  )
};

export default MainTask;
