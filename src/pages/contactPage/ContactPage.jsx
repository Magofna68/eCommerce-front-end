import React from 'react'
import './contactPage.styles.scss';
import Footer from '../../components/footer/Footer.jsx';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function ContactPage(props) {
  const { viewPort } = props;

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
      { // for web consumption
        viewPort > 420 ?
        <Row>
          <Col sm={4}>
            <br/><br/>
            <h4>Customer Service</h4>
            <div className='customerService'>
              {services.map((service) =>
                <li className='serviceItem'>{service}</li>
                )}
            </div>
            <br/>
            <br/>
            <h4>Quick Links</h4>
            <div className='quickLinks'>
              {quickLinks.map((link) => 
                <li className='serviceItem'>{link}</li>
                )}
            </div>
          </Col>
          <Col sm={8}>
            <div className='contactPannel'>
              <hr/>
              <h2>Contact Us</h2>
              <hr/>
              <div className='pannelItem'>
                <Row>
                  <Col xs={12}>
                    <h5>Customer Care</h5>
                    <p>If you are contacting us about an order, please have your order number readily available so that we may assist you in a prompt and timely manner.</p>
                  </Col>

                  <Col>
                    <h6><MailOutlineIcon /> Mail Address</h6>
                    <p>
                      Underground Royalty LLC<br/>
                      111 Maid-Up Ave. N <br/>
                      Mi-Proj, YES 89203-9
                    </p>
                  </Col>
                </Row>
                <Row>
                  <h6><PersonOutlineIcon /> Customer Service Hours:</h6>
                  <p>
                    Mon-Fri 6:00-17:00
                    <br/>
                    Sat 8:00-15:30
                    <br/>
                    Closed Sundays
                  </p>
                </Row>
                <Row>
                  <h6>
                    <PhoneIcon fontSize='medium'/>
                    Customer Service Phone:
                  </h6>
                  <p>1-800-XXX-XXXX</p>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      : 
          // for mobile devices
        <>
          <hr/>
          <h2 style={{ textAlign: 'left'}}>Contact Us</h2>
          <hr/>
          <div className="mobilePannel">
            <h6>Customer Care</h6>
            <span>If you are contacting us about an order, please have your order number readily available so we may serve you in the most efficient manner.</span>
            <br/>
            <Row>
              <div className="mobileLeftPannel">
                <Col xs={6}>
                  <h6><MailOutlineIcon fontSize='small'/> Mail Address</h6>
                  <p>
                    Underground Royalty LLC<br/>
                    111 Maid-Up Ave. N <br/>
                    Mi-Proj, YES 89203-9
                  </p>
                  <br/>
                  <h6><PersonOutlineIcon fontSize='small'/> Need Help?</h6>
                  <p>
                    Mon-Fri 6:00-17:00
                    <br/>
                    Sat 8:00-15:30
                    <br/>
                    Closed Sundays
                  </p>
                  <br/>
                  <h6><PhoneIcon fontSize='small'/>
                    Phone:
                  </h6>
                  <p>1-800-XXX-XXXX</p>
                </Col>
              </div>
              <Col xs={6}>
                <h5 style={{ fontWeight: 600, marginLeft: '5%'}}>Customer Service</h5>
                <div style={{ marginBottom: '20%'}}>
                  {services.map((service) =>
                    <li style={{ fontSize: '13px', marginLeft: '10%'}}>{service}</li>
                    )}
                </div>
                  {/* <br/>
                  <br/> */}
                  <h6 style={{ marginLeft: '20%'}}>Quick Links</h6>
                  <div>
                    {quickLinks.map((link) => 
                      <li style={{ display: 'flex', fontSize: '15px', marginLeft: '25%'}}>{link}</li>
                    )}
                  </div>
              </Col>
            </Row>
          </div>
        </>
      }
    </Container>
  )
}
