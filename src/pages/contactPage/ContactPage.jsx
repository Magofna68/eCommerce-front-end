import React from 'react'
import './contactPage.styles.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


export default function ContactPage() {
  const services = [
    'Exchange & returns', 
    'I Want Free Shipping', 
    ' Payment & Delivery',
    'Account Help',
    'Accessibility',
    'International',
    'Community',
    'Policies & Terms',
    'Underground Royalty Info',
    'Contact Us',
    'FAQ',
  ];

  const quickLinks = [
    'Gift Cards',
    'Favorites',
    'Free Stickers',
    'Marketing'
  ]

  return (
    <Container className='contactPage' fluid="true">
      <Row>
        <Col sm={4}>
          <br/><br/>

          <h4>Customer Service</h4>

          <div className='customerService'>
            {services.map((service) =>
              <li className='serviceItem'>{service}</li>
            )};
          </div>

          <br/><br/>

          <h4>Quick Links</h4>

          <div className='quickLinks'>
            {quickLinks.map((link) => 
              <li className='serviceItem'>{link}</li>
              )};
          </div>
        </Col>
        <Col sm={8}>
          <div className='contactPannel'>
            <hr/>
            <h2>Contact Us</h2>
            <hr/>
              {/* <Col> */}
                <div className='pannelItem'>
                <Row>
                  <Col>
                    <h6>Customer Care</h6>
                    <p>If you are contacting us about an order, please have your order number readily available.</p>
                  </Col>
                  <Col>
                    <h6>Mail Address</h6>
                    <p>
                      Underground Royalty LLC<br/>
                      111 Maid-Up Ave. N <br/>
                      Mi-Proj, YES 89203-9
                    </p>
                  </Col>
                </Row>
                <Row>
                  <h6>Customer Service Hours:</h6>
                  <p>
                    Mon-Fri 6:00-17:00
                    <br/>
                    Sat 8:00-15:30
                    <br/>
                    Closed Sundays
                  </p>
                </Row>
                <Row>
                  <h6>Customer Service Phone:</h6>
                  <p>1-800-XXX-XXXX</p>
                </Row>
                </div>
              {/* </Col> */}
              <Col>
              test
              </Col>
          </div>
        </Col>
      </Row>

    </Container>
  )
}
