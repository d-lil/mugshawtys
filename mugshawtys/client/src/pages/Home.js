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

const Home = () => {
  // create state for holding returned google api data
 
  
  return (
    <>
    
      <Container>
          <CardComp />
      </Container>
 
  </>
  );
};

export default Home;