import React from 'react';
import FormField from '../../molecules/FormField/FormField';
import { ViewWrapper } from '../../atoms/ViewWrapper/ViewWrapper';

const Form = (props) => {
  return (
    <ViewWrapper as="form">
      <FormField label="name" name="name" id="name" type="text" />
      <FormField label="attendance" name="attendance" id="attendance" type="text" />
      <FormField label="average" name="average" id="average" type="text" />
      <button>add</button>
    </ViewWrapper>
  );
};

export default Form;
