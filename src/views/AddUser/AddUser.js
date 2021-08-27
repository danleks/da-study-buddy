import React, { useContext, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { UsersContext } from 'providers/UsersProvider';

const INIT_STATE = {
  name: 'test',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [values, setFormValues] = useState(INIT_STATE);

  const handleInputChange = (e) => {
    setFormValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleAddUser(values);
    setFormValues(INIT_STATE);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitForm}>
      <FormField label="name" name="name" id="name" type="text" value={values.name} handleInputChange={handleInputChange} />
      <FormField label="attendance" name="attendance" id="attendance" type="text" value={values.attendance} handleInputChange={handleInputChange} />
      <FormField label="average" name="average" id="average" type="text" value={values.average} handleInputChange={handleInputChange} />
      <Button primary type="submit">
        add
      </Button>
    </ViewWrapper>
  );
};

export default AddUser;
