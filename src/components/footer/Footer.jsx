import React from 'react'
import './footer.styles.scss';
import { Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  const services = [
    'Exchange & returns', 
    'Customer Service', 
    'Ways to Get Your Stuff',
    'Contact Us',
    'Accessibility',
    'Find a Store',
    'Community',
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
    " © 2023 Underground ROYALTY",
    'Privacy Policy',
    'Terms and Conditions',
    ' Site Map',
  ];

  const footerBottomMobile = footerBottom.slice(0, 3);

  const connect = [
    <a href="https://www.facebook.com/brandon.magofna.5" target="_blank" rel="noreferrer"><FacebookIcon fontSize="large" /></a>,
    <a href="https://www.instagram.com/bmagofna68/?hl=en" target="_blank" rel="noreferrer"><InstagramIcon fontSize="large" /></a>,
    <a href="https://www.linkedin.com/in/magofna" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>,
    <a href="https://github.com/Magofna68" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></a>,
  ]

  return (
  <Container fluid>
    <div className='footerTitle'>
        <span className='typographyContainer'>
          <Typography
            className='typographyText'
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
              backgroundImage: `url('https://media2.giphy.com/media/xUA7aKCtqnlAzuIg8M/giphy.gif?cid=ecf05e47hqupws5gkavymjrlpl5ks9utklt5jyos4s5q9irm&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(255,155,0,50%)',
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

{/* FOOTER COLUMNS */}
      <div className="backdrop">
        <Col  className="needHelpCol" style={{paddingRight: '3%'}}>
            <h5 style={{fontWeight: 600,}}>Need Help?</h5>
            {services.map((service) => <li className="footerListItem">{service}</li>)}
        </Col>
        
        <Col className="exploreCol" style={{ marginLeft: '2%', paddingRight: '3%', padding: 0}}>
          <h5 style={{fontWeight: 600,}}>Explore</h5>
          {explore.map((category) => <li className="footerListItem">{category}</li>)}
        </Col>

        <div  className="middleFooterCol" style={{ width: '18%', padding: 0}}></div>

        <Col className="opportunitiesCol" style={{ marginLeft: '1%'}}>
          <h5 style={{fontWeight: 600,}}>Opportunities</h5>
          {explore.map((category) => <li className="footerListItem">{category}</li>)}
        </Col>
        
        <Col className="connectCol" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: 0}}>
          {
            window.innerWidth > 420 ? 
            <>
              <h5 className="connectTitle" style={{fontWeight: 600, marginBottom: '-2%'}}>Connect</h5><br/>
            </>
            :
            null
          }
          Underground
          <Typography
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
          <ul 
            style={{ 
              borderTop: '1px solid black',
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
          </ul><br/><br/><br/>
        </Col>
      </div>

      {
        window.innerWidth > 600 ?
          <div className='footerBottomContainer'> 
            {footerBottom.map((text) =>
              <p className="footerBottom">
                {text}
              </p>
            )}
          </div>
        :
        <div className='footerBottomContainer'> 
        {footerBottomMobile.map((text) =>
          <p className="footerBottom">
            {text}
          </p>
        )}
      </div>
        
      }

    </Container>
  )
}
