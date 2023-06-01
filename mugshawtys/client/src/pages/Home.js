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

const searchInmates = (query) => {
  return fetch(`http://www.JailBase.com/api/1/recent/?source_id=${query}`);
};

const Home = () => {
  // create state for holding returned google api data
  // const [inmates, setInmates] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');


  // try {
  //   const response = await searchInmates("jason");

  //   if (!response.ok) {
  //     throw new Error('something went wrong!');
  //   }

  //   const { items } = await response.json();
  //   console.log(items);
  //   const inmates = items.map((book) => ({
  //     bookId: book.id,
  //     authors: book.volumeInfo.authors || ['No author to display'],
  //     title: book.volumeInfo.title,
  //     description: book.volumeInfo.description || 'No description to display',
  //     image: book.volumeInfo.imageLinks?.thumbnail || '',
  //   }));
  // };
  // } catch (err) {
  //   console.error(err);
  // }
  
  return (
    <>
    
      <Container>
        {Auth.loggedIn() ? ( 
          <CardComp />
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