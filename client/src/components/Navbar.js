import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Modal, Tab, NavDropdown } from 'react-bootstrap'; // UI components
import SignUpForm from './SignupForm'; // Sign Up Form component
import LoginForm from './LoginForm'; // Login Form component
import Auth from '../utils/auth'; // Token handling utilities

const AppNavbar = () => {
  // Set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' className='nav'>
        <div className="d-flex flex-nowrap w-100">
          <Navbar.Brand as={Link} to='/' className="d-flex justify-content-start title" id="title">
            Babes Behind Bars
          </Navbar.Brand>
          <Navbar.Collapse className='d-flex justify-content-end'>
            <Nav className='ml-auto d-flex'>
              {/* Conditional rendering based on authentication status */}
              {Auth.loggedIn() ? (
                <NavDropdown title="🏃‍♂️💨🚓">
                  <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/settings'>Settings</NavDropdown.Item>
                  <NavDropdown.Item>👷‍♀️🛑👷 </NavDropdown.Item>
                  <NavDropdown.Item onClick={Auth.logout}>Logout</NavDropdown.Item>                  
                </NavDropdown>
              ) : (
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* Modal for login/signup */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container for login/signup */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
