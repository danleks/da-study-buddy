import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'hooks/useForm';
import { UsersContext } from 'providers/UsersProvider';

const INIT_STATE = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { values, handleInputChange, handleClearValues, handleToggleConsent, handleThrowError } = useForm(INIT_STATE);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.consent) {
      handleAddUser(values);
      handleClearValues();
    } else {
      handleThrowError('You need to give consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitForm}>
      <FormField label="name" name="name" id="name" type="text" value={values.name} handleInputChange={handleInputChange} data-testid="Name" />
      <FormField
        label="attendance"
        name="attendance"
        id="attendance"
        type="text"
        value={values.attendance}
        handleInputChange={handleInputChange}
        data-testid="Attendance"
      />
      <FormField
        label="average"
        name="average"
        id="average"
        type="text"
        value={values.average}
        handleInputChange={handleInputChange}
        data-testid="Average"
      />
      <FormField
        label="consent"
        name="consent"
        id="consent"
        type="checkbox"
        value={values.consent}
        onChange={handleToggleConsent}
        data-testid="Average"
      />
      <Button primary type="submit">
        add
      </Button>
      {!values.consent ? values.error : null}
    </ViewWrapper>
  );
};

export default AddUser;
