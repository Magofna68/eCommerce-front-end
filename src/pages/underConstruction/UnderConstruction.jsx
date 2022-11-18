import React from 'react'
import Crown from '../../assets/crown.png';
import {Link} from 'react-router-dom'

export default function UnderConstruction() {
  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <img src={Crown} alt="Company Logo" width="200px" />
      <h1>This Part of the Site is still under construction.</h1>
      <h3>We thank you for your patience.</h3><br/>
      <Link href="/">Click here to return home</Link>
    </div>
  )
}
