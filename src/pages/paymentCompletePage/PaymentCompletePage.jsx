import React from 'react'
import Crown from '../../assets/crown.png';

export default function PaymentCompletePage() {
  return (
    <div style={{marginTop: '10%',}}>
      <h3>
        Thank You for Shopping at:
      </h3><br/>
      <img width="250px" src={Crown} alt="company image"></img>
      <h1 style={{fontWeight: 'bold'}}>UNDERGROUND ROYALTY</h1><br/>
      Your Payment was <span style={{color: 'green', fontWeight:'bold'}}>Successful</span>!
    </div>
  )
}
