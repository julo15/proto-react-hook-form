import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { FieldPath, useForm, UseFormRegister, UseFormUnregister } from 'react-hook-form';
import { BriefFormValues } from './Model/BriefFormValues';
import TextInput from './Form/TextInput';
import { FormController } from './Form/Shared';
import Task from './Form/Task';
import MainTask from './BriefForm/MainTask';

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
`;

const Button = styled.button`
`;

const Submit = styled.input`
`;

const App = () => {

  const {
    register,
    handleSubmit,
    unregister,
  } = useForm<BriefFormValues>();

  const onSubmit = useCallback(data => console.log('Submit', data), []);

  const [showName, setShowName] = useState(true);
  const toggleShowName = useCallback(() => {
    setShowName(!showName);
  }, [showName]);

  const formController: FormController<BriefFormValues> = useMemo(() => ({
    register,
    unregister,
  }), [register, unregister]);

  return (
    <AppContainer>
      <Button onClick={toggleShowName}>Toggle</Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {true && (
          <TextInput 
            formController={formController}
            name="title"
            unregisterOnUnmount={true}
          />
        )}
        {showName && (
          <MainTask
            formController={formController}
            name="task"
            unregisterOnUnmount={true}
          />
        )}
        <MainTask
          formController={formController}
          name="tasks.0"
          unregisterOnUnmount={true}
          />
        <Submit type="submit" />
      </Form>
    </AppContainer>
  );
};

export default App;
