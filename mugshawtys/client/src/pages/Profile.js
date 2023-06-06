import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import CardComp from "../components/Card";
// import User from '../utils/User';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME, QUERY_INMATES } from "../utils/queries";
import Auth from "../utils/auth";
// import { REMOVE_INMATE } from '../utils/mutations';
// import { removeInmateId } from '../utils/localStorage';
import { Navigate, useParams } from "react-router-dom";

const Profile = () => {
 const { loading, data } = useQuery(QUERY_ME);
  console.log(data);
  // const token = Auth.loggedIn() ? Auth.getToken() : null;
  // const { loading, data } = useQuery(QUERY_ME);
  // if (!token) {
  //   return false;
  // }
  // const user = data?.me || {};
  // console.log(user)

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
  
  // if (!data?.me || !inmateData?.inmates) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      {/* <p>{userParam ? `${user.username}` : 'your'}</p> */}
      <div className="profile">
        <Container>
          {/* <Image src='' alt="profile pic" roundedCircle /> */}
          <h1>{data?.image}</h1>
        </Container>
      </div>
      <Container></Container>
    </>
  );
};

export default Profile;
