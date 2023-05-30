import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

const SettingsForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ preferences: '', about: ''});
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(userFormData);
    try {
      const { data } = await updateUser({
        variables: { ...userFormData },
        });

    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      preferences: `${data.updateUser.preferences}`,
      about: `${data.updateUser.about}`,
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form validated={validated} noValidate onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Ruh-Roh! Something went wrong!
        </Alert>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='preferences' id='label' >Preferences</Form.Label>
          <p>Please Select One</p>
            <select name='preferences' onSubmit={handleInputChange} value={userFormData.preferences}>
              <option name='male' value='male'>Felonious Fellas (M)</option>
              <option name='female' value='female'>Miss Demeanors (F)</option>
              <option name='both' value='both'>Both</option>
            </select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='about' id='label'>About</Form.Label>
          <Form.Control
            type='text'
            placeholder='Write a little about yourself'
            name='about'
            onChange={handleInputChange}
            value={userFormData.about}
            required
          />
          <Form.Control.Feedback type='invalid'>About is required!</Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(userFormData.about)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SettingsForm;