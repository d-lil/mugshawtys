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
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_INMATES } from '../utils/queries';
import Auth from '../utils/auth';
// import { REMOVE_INMATE } from '../utils/mutations';
// import { removeInmateId } from '../utils/localStorage';

const Profile = () => {
  
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const { loading, data } = useQuery(QUERY_ME);
  // const { loading: inmateLoading, data: inmateData } = useQuery(QUERY_INMATES);
    // console.log(inmateData)
  if (!token) {
    return false;
  }
  

  // const [removeInmate, { error }] = useMutation(REMOVE_INMATE);

 
  // const handleDeleteInmate = async (inmateId) => {
  //   try {
  //     const { data } = await removeInmate({
  //       variables: { inmateId },
  //     });

  //     // upon success, remove inmate's id from localStorage
  //     removeInmateId(inmateId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  console.log(data?.me)
  // if (!data?.me || !inmateData?.inmates) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      <div className="profile">
        <Container>
          {/* <Image src='' alt="profile pic" roundedCircle /> */}
          <h1></h1>    
        </Container>
      </div>
      <Container>
        
      </Container>        
  </>
  );
};

export default Profile;