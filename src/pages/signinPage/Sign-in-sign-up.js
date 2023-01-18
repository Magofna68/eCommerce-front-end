import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './sign-in-sign-up.syles.scss';

import SignIn from '../../components/sign-in/Sign-in.jsx';
import SignUp from '../../components/sign-up/Sign-up.jsx'

const SignInAndSignUpPage = () => {
  
  return(
    <Container fluid>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <SignIn  /> 
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <SignUp />
        </Col>
      </Row>
    </Container>
  )
};

export default SignInAndSignUpPage;