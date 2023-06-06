import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { parse } from 'graphql';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', gender: '', age: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [createUser, { error, data }] = useMutation(ADD_USER);
  

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

    try {
      
      const { data } = await createUser({
        variables: { ...userFormData },
        });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(userFormData)
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      gender: '',
      age: '',
     
      
    });
  };



  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form validated={validated} noValidate onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <br></br>
          <input
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <br></br>
          <input
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <br></br>
          <input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </Form.Group>
        
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='gender'>Gender</Form.Label>
          <br></br>
            <select name='gender' onChange={handleInputChange} required>
              <option name='male' value='male'>Male</option>
              <option name='female' value='female'>Female</option>
            </select>
        </Form.Group>
      
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='age'>Your Age</Form.Label>
          <br></br>
          <input type="number" value={userFormData.age} name="age" onChange={handleInputChange} />
        </Form.Group>
        
        

        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
