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
// import User from '../utils/User';
import Auth from '../utils/auth';
import hearthands from '.././components/images/hearthands.png';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';


const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log(users);
  
 
  const newDb = data && data.users.map((inmate) => ({
      inmateId: inmate._id,
      inmateName: inmate.username,
      inmateImage: inmate.image,
      inmateAge: inmate.age,
      inmateGender: inmate.gender,
      inmateAbout: inmate.about,
    }))
 if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    
      <Container>
        {Auth.loggedIn() ? ( 
          <CardComp data={newDb}/>
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