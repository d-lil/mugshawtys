import React, { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, Row, Image } from "react-bootstrap";
import CardComp from "../components/Card";
// import User from '../utils/User';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME, QUERY_INMATES } from "../utils/queries";
import Auth from "../utils/auth";
// import { REMOVE_INMATE } from '../utils/mutations';
// import { removeInmateId } from '../utils/localStorage';
import { Link } from "react-router-dom";
import Inmate from "./Inmate"
import { Navigate, useParams } from "react-router-dom";
import "./Profile.css";


const Profile = () => {

  const { loading, data } = useQuery(QUERY_ME);
  console.log(data)
  if (!loading) {
    const user = data?.me || data?.user || {};
    console.log(data);

    if (Auth.loggedIn() && Auth.getProfile().data.username) {
      console.log("true");
    }
  }

 
  console.log(data?.me);

  const inmate = [...new Map(data?.me.savedInmates.map((item) => [item.inmateId, item])).values()]
  return (
    <>
      

          <div className="profileMe">
              <h1><u>My Profile</u></h1>
              <Card className="profCard">
                <div
                  style={{ backgroundImage: 'url(' + data?.me.image + ')' }}
                  className='card'
                >
                  <h3 className="cardName"><b>{data?.me.username}</b> - {data?.me.age}  </h3>
                </div>
              </Card>

              <br></br>
              <h3 className="label"><u>About Me</u></h3>
              <p>{data?.me.about}</p>
            </div>
          
          <div className="profileSaved">
            
              <h3 className="match"><u>My Matches</u></h3>
              <h2 className='pt-5 match'>
                {data?.me.savedInmates.length
                  ? `Viewing ${inmate.length} saved ${data?.me.savedInmates.length === 1 ? 'inmate' : 'inmates'}:`
                  : 'You have no matches!'}
              </h2>
             
                {inmate.map((inmate) => {
                return (
                      
                      <Card key={inmate.inmateId} className="profCard">
                        <Link to={`/inmate/${inmate.inmateId}`}>
                        <div 
                          style={{ backgroundImage: 'url(' + inmate.inmateImage + ')' }}
                          className='card'
                        >
                          <h3 className="cardName"><b>{inmate.inmateName}</b> - {inmate.inmateAge}  </h3>
                        </div>
                        </Link>
                          {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteInmate(inmate.inmateId)}>
                          Delete this Inmate
                          </Button> */}
                      </Card>   
                            
                );
              })}
              
          </div>
    
    </>
  );
};

export default Profile;
