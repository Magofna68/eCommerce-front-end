import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './sign-in-sign-up.syles.scss';

import SignIn from '../../components/sign-in/Sign-in.jsx';
import SignUp from '../../components/sign-up/Sign-up.jsx'

const SignInAndSignUpPage = () => {
  
  return(
    <Container fluid>
      <Row>
        <Tabs
          defaultActiveKey="returning"
          // id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="New" title="Sign Up">
          <Col lg={12} md={12} sm={12} xs={12}>
            <SignUp />
          </Col>
          </Tab>
          <Tab eventKey="returning" title="Sign In">
            <Col lg={12} md={12} sm={12} xs={12}>
              <SignIn  /> 
            </Col>
          </Tab>
          {/* <Tab eventKey="contact" title="Contact" disabled>
          </Tab> */}
        </Tabs>
      </Row>
    </Container>
  )
};

export default SignInAndSignUpPage;