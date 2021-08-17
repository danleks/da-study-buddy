import React, { useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import { StyledViewWrapper } from './Form.styles';
import Button from '../../atoms/Button/Button';

const Form = (props) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    console.log(name);
    setName(e.target.value);
  };
  return (
    <StyledViewWrapper as="form">
      <FormField label="name" name="name" id="name" type="text" value={name} handleInputChange={handleInputChange} />
      <FormField label="attendance" name="attendance" id="attendance" type="text" />
      <FormField label="average" name="average" id="average" type="text" />
      <Button primary>add</Button>
    </StyledViewWrapper>
  );
};

export default Form;
