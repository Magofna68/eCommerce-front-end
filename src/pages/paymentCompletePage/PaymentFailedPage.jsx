import React from 'react'

export default function PaymentFailedPage() {
  return (
    <div>
      <h2 style={{marginTop: '10%'}}>Oops, something went wrong.</h2><br/>
      Your payment was <span style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline'}}>NOT</span> processed.
      <br/><br/><br/>
      <h4>
        Please try again later, or Contact Customer care for further support.
      </h4>
    </div>
  )
}
