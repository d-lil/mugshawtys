import React, { useState } from 'react';
import { Form, Button, Modal, Alert, FormGroup } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

import './Settings.css';

const SettingsForm = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userFormData, setUserFormData] = useState({ image: '', about: ''});
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
      await updateUser({
        variables: { ...userFormData },
        });
    
    } catch (err) {
      console.error(err);
    }
    
    setUserFormData({
      image: '',
      about: '',
    });
  };
  

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form validated={validated} noValidate onSubmit={handleFormSubmit} className='settingsPage'>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Ruh-Roh! Something went wrong!
        </Alert>
        
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='image' className='title' id='label'><b><u>Profile Picture</u></b></Form.Label>
          <p>Upload a picture of yourself to Imgur (or a similar service) of yourself and paste the URL of that image here!</p>
          <p>Mugshots are encouraged! Be yourself!</p>
          <input
            type='text'
            placeholder='URL of your image'
            name='image'
            onChange={handleInputChange}
            value={userFormData.image}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='about' className='title' id='label'><u><b>About</b></u></Form.Label>
          <p>Feel free to be honest about your charges here, love is based on honesty!</p>
          <p>Or if you haven't been in trouble with the law and are just into bad boys/girls, let them know!</p>
          <textarea
            className='settingsInput'
            rows='8'
            cols='50'
            placeholder='Write a little about yourself'
            name='about'
            onChange={handleInputChange}
            value={userFormData.about}
          />
          
        </Form.Group>

        <Button
          type='submit'
          variant='success'
          onClick={handleShow}
          >
          Submit
        </Button>
        
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title><b>Success!</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>Settings have been updated!</Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
      </Form>


    </>
  );
};

export default SettingsForm;