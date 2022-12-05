import './returnPolicyPage.styles.scss';
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function ReturnPolicyPage() {

const returnStatements = [
  'Online orders must be returned within 14 days of the delivery date.', 
  'For specific written guarantees and/or warranties—please check the label, hang tag, or warranty card for details and return information.', 
  'Clearance items may only be returned on a per store basis', 
  'Items noted as nonreturnable cannot be returned.', 
  'Gift cards cannot be returned.',
]

const openReturnStatements = [
  'Underground Royalty cannot guarantee accepted returns as acceptance will be based on presentation of item.',
  'Damage incurred to goods may thwart accepted returns.',
  'In-Store credit will be acredited to returned items without a receipt.',
  'No receipt transactions will be valuated at lowest available national price.'
]

const infoList = returnStatements.map((info) => 
  <li className='infoItem'>{info}</li>
);

const openedInfoList = openReturnStatements.map((info) => 
  <li className='infoItem'>{info}</li>
)

  return (
    <div className='returnContainer'>
      <Row>
        <h1 style={{color: 'white', background: 'black',textAlign: 'center', marginTop: '5%', marginBottom: '3%'}}>RETURN POLICY EXCEPTIONS</h1>
        <Col lg={4} md={4} sm={6} xs={12}>
          <div className='leftContain'>
            <div className='leftItem'>
              <h4><MailOutlineIcon /> <strong>Mail Address</strong></h4>
              <p>
                0045 Underground Royalty LLC<br/>
                111 Maid-Up Ave. N <br/>
                Mi-Proj, YES 89203-9
              </p>
            </div>

            <div className='leftItem'>
              <h4><PersonOutlineIcon sz='large' /> <strong>Customer Service Hours:</strong></h4>
              <p>
                <strong>Mon-Fri:</strong> 6:00-17:00
                <br/>
                <strong>Saturday:</strong> 8:00-15:30
                <br/>
                <strong>Sunday:</strong> Closed
              </p>
            </div>

            <div className='leftItem'>
              <h4> <PhoneIcon fontSize='medium'/> <strong>Customer Service Phone: </strong></h4>
              <p>1-800-XXX-XXXX</p>
            </div>
          </div>
        </Col>
        <Col className='rightContain' lg={8} md={8} sm={6} xs={12}>
          <h3>Unopened Items:</h3>
          <ul>{infoList}</ul>
          <br/>
          <h3>Opened Items:</h3>
          <ul>{openedInfoList}</ul>
        </Col> 
      </Row>
    </div>
  )
}
