import React from 'react'
import './footer.styles.scss';

import { Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Footer() {
  const services = [
    'Exchange & returns', 
    'Customer Service', 
    'Ways to Get Your Stuff',
    'Contact Us',
    'Accessibility',
    'Find a Store',
    'Community',
    // 'Policies & Terms',
    // 'Underground Royalty Info',
    // 'Contact Us',
    'FAQ',
  ];

  const explore = [
    'Jobs',
    'Culture',
    'Investors',
    'Community & Press',
    'About UGR',
    'UGR Foundation',
    'Popular Searches',
    'UGR Events',
  ]


  const footerBottom = [
    <span><CopyrightIcon fontSize="small" style={{color: 'white'}} />
    2023 Underground ROYALTY</span>,
    'Privacy Policy',
    'Terms & Conditions',
    ' Site Map',
  ];

  const connect = [
    <FacebookIcon fontSize="large" />,
    <InstagramIcon fontSize="large" />,
    <LinkedInIcon fontSize="large" />,
    <GitHubIcon fontSize='large' />,
  ]

  return (
  <Container fluid>
    <div className='footerTitle'>
      <div className='footerBlackbar' />
        <span className='typographyContainer'>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.75px white',
              backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,155,0,50%)',
                WebkitTextStroke: '0.5px gold',
                cursor: 'arrow',
              }
            }}
          >
            Underground&nbsp;
          </Typography>
          <Typography
          className='typographyText'
            variant='h4'
            sx={{
              fontWeight: 'bolder',
              color: 'rgb(192,192,192,25%)',
              WebkitTextStroke: '0.75px white',
              // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
              backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,155,0,50%)',
                // color: 'rgb(192,192,192,50%)',
                WebkitTextStroke: '0.5px silver',
                cursor: 'arrow',
              }
            }}
          >
            ROYALTY
          </Typography>
        </span>
      </div>
      <br/>
      <Row 
        style={{ 
          // marginLeft: '3%',
          fontWeight: 600, 
          fontSize: '20px', 
          marginBottom: '1%', 
          opacity: '0.7',
          width: '95%'
        }}
      >
        <Col style={{ paddingRight: '8%'}}>Need Help?</Col>
        <Col style={{ }}>Explore</Col>
        <Col style={{ marginRight: '-2%', color: 'white'}}>PlaceHolder</Col>
        <Col style={{ display: 'flex', justifyContent: 'left'}}>Lorum Ipsum</Col>
        <Col style={{ justifyContent: 'center', display: 'flex' }}>Connect</Col>
      </Row>
      <Row 
        className="backdrop" 
        style={{ 
          width: '95%',
          listStyleType: 'none', 
          display: 'flex', 
          justifyContent: 'left', 
          alignItems: 'left', 
          alignContent: 'left'
        }}
      >
        <Col style={{paddingRight: '7%'}}>{services.map((service) => <li className="footerListItem">{service}</li>)}</Col>
        <Col style={{ marginLeft: '1%'}}>{explore.map((category) => <li className="footerListItem">{category}</li>)}</Col>
        <Col style={{ padding: 0, margin: 0}}></Col>
        <Col style={{ marginLeft: '1%'}}>{explore.map((category) => <li className="footerListItem">{category}</li>)}</Col>
        <Col style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
          Underground
          <Typography
            className='typographyText'
            variant='h5'
            sx={{
              color: 'rgb(212,175,55,25%)',
              backgroundImage: `url('https://media1.giphy.com/media/ybR0YqgiZFVVJWvZOe/giphy.gif?cid=ecf05e47rcmw0qkt5vuqh5kphnj3549vpopvvlm9bujuu3ua&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': { color: 'rgb(192,192,192,50%)'}
            }}
          >
            LOYALTY
          </Typography>
            <span className='connectTypography'>Join Now</span>
            <span style={{ marginTop: '-10%'}}>_________________________</span>
          <ul 
            style={{ 
              listStyleType: 'none', 
              flexDirection: 'row', 
              display: 'flex', 
              justifyContent: 'center', 
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              margin: 0,
              padding: 0,
              marginTop: '-5%'
            }}
          >
            {connect.map((icon) => <li style={{ }}>{icon}</li>)}
          </ul>
        </Col>
      </Row>

      <div 
        className='footerBlackbar' 
        style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px', 
          color: 'silver', 
          width: '100%',
          fontWeight: '600',
          height: '20px',
          marginTop: '2.5%'
        }}
      > 
        {footerBottom.map((text) =>
          <p className="footerBottom">
            <span className="line">|&nbsp;&nbsp;</span>{text}<span className="line">&nbsp;&nbsp;|</span>
          </p>
        )}
      </div>
    </Container>
  )
}
