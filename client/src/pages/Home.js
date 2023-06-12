// Importing necessary modules, components and utilities
import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row,
} from 'react-bootstrap';
import CardComp from '../components/Card';
import Auth from '../utils/auth';
import hearthands from '.././components/images/hearthands.png';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

// Home component
const Home = () => {
  // Initialize GraphQL Query
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log(users);

  // Prepare new data structure for the user data
  const newDb = data && data.users.map((inmate) => ({
      inmateId: inmate._id,
      inmateName: inmate.username,
      inmateImage: inmate.image,
      inmateAge: inmate.age,
      inmateGender: inmate.gender,
      inmateAbout: inmate.about,
    }))

  // Handle Loading State
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render Home component
  return (
    <>    
      <Container>
        {Auth.loggedIn() ? ( 
          <CardComp data={newDb}/>   // Render CardComp component if user is logged in
          ) : (
            <div>
              <h1 className="title">Sign up or login to start matching!</h1> 
                <img src={hearthands} alt='hearthands' className="heart" />
            </div>
              )}
      </Container>        
  </>
  );
};

export default Home;
