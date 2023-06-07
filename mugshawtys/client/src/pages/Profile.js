import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, Row, Image } from "react-bootstrap";
import CardComp from "../components/Card";
// import User from '../utils/User';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME, QUERY_INMATES } from "../utils/queries";
import Auth from "../utils/auth";
// import { REMOVE_INMATE } from '../utils/mutations';
// import { removeInmateId } from '../utils/localStorage';
import { Navigate, useParams } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  // const { username: userParam } = useParams();

  // const { loading, error, data } = useQuery(QUERY_USER, {
  //   variables: { username: "san" },
  // });

  const { loading, data } = useQuery(QUERY_ME);
 
  if (!loading) {
    const user = data?.me || data?.user || {};
    console.log(data);

    if (Auth.loggedIn() && Auth.getProfile().data.username) {
      console.log("true");
      // return <Navigate to="/profile" />;
    }
  }

  // const token = Auth.loggedIn() ? Auth.getToken() : null;
  // const { loading, data } = useQuery(QUERY_ME);
  // if (!token) {
  //   return false;
  // }
  // const user = data?.me || {};
  // console.log(user)

  // const [removeInmate, { error }] = useMutation(REMOVE_INMATE);

  const handleDeleteInmate = async (_id) => {
    try {
      const { data } = await removeInmate({
        variables: { _id },
      });

      // upon success, remove inmate's id from localStorage
      removeInmateId(_id);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(data?.me);
  // if (!data?.me || !inmateData?.inmates) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      

            <div className="profileMe">
              <h1><u>My Profile</u></h1>
              <Card>
                <div
                  style={{ backgroundImage: 'url(' + data?.me.image + ')' }}
                  className='card'
                >
                  <h3 className="cardName"><b>{data?.me.username}</b> - {data?.me.age}  </h3>
                </div>
              </Card>
              <p>Preferences - {data?.me.preferences}</p>
              <br></br>
              <h3 className="label"><u>About Me</u></h3>
              <p>{data?.me.about}</p>
            </div>
          
          <div className="profileSaved">
            
              <h3 className="match"><u>My Matches</u></h3>
              <h2 className='pt-5 match'>
                {data?.me.savedInmates.length
                  ? `Viewing ${data?.me.savedInmates.length} saved ${data?.me.savedInmates.length === 1 ? 'inmate' : 'inmates'}:`
                  : 'You have no matches!'}
              </h2>
              <Col md="3">
                {data?.me.savedInmates.map((inmate) => {
                return (
                  <Col md="4">
                    <Card key={inmate._id} border='dark' className="savedInmateCard">
                      {inmate.inmateImage ? 
                      <Card.Img src={inmate.inmateImage} alt={`${inmate.inmateName}`} variant='top' /> : null}
                      <Card.Body>
                        <Card.Title>{inmate.inmateName}</Card.Title>
                        <Card.Text>{inmate.inmateAge}</Card.Text>
                        <Button className='btn-block btn-danger' onClick={() => handleDeleteInmate(inmate._id)}>
                          Delete this Book!
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
              </Col>
          </div>
    
    </>
  );
};

export default Profile;
