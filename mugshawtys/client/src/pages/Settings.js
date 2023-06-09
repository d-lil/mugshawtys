import React, { useState } from 'react';
import { Form, Button, Alert, FormGroup } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import { ProductDisplay } from '../components/Stripe';


const SettingsForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ image: '', preferences: '', about: ''});
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
      image: `${data.updateUser.image}`,
      preferences: `${data.updateUser.preferences}`,
      about: `${data.updateUser.about}`,
    });
  };
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
        console.log(current.src);
      };
      reader.readAsDataURL(file);
    }
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
        <Form.Label htmlFor='image' className='title' id='label' ><u><b>Upload an Image</b></u></Form.Label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <div
            style={{
              height: "90px",
              width: "90px",
              border: "1px black"
            }}
            onClick={() => imageUploader.current.click()}
          >
            <img
              ref={uploadedImage}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
        </div>
      Click to upload Image
    </div>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='preferences' className='title' id='label' ><u><b>Preferences</b></u></Form.Label>
          <p>Please Select One</p>
            <select name='preferences' onChange={handleInputChange} value={userFormData.preferences}>
              <option name='male' value='male'>Felonious Fellas (M)</option>
              <option name='female' value='female'>Miss Demeanors (F)</option>
              <option name='both' value='both'>Both</option>
            </select>
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
          variant='success'>
           Go Premium!
          </Button>
<         ProductDisplay className='stripe-button' />

        <Button
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>

    </>
  );
};

export default SettingsForm;