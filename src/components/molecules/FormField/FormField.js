import React from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = ({ label, name, type, id, value, handleInputChange, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input name={name} type={type} id={id} value={value} onChange={handleInputChange} {...rest} />
    </Wrapper>
  );
};

export default FormField;
