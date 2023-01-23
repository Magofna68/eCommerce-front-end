import './reviewTemplate.styles.scss';
import React from 'react'
import { Container, Row } from 'react-bootstrap'

 const ReviewTemplate = (props)  => {
  const { key, id, date, feedback, title, rating, username, reviewStars } = props;
  
  
  return (
    <Container fluid className="reviewContainer">
      <div className='review' key={key} id={id}>
        <Row>
          <div className="upperReviewContainer">
            <span className='rating'>{reviewStars(rating)}({rating})</span>
            <span className="date">{date}</span>
            <span className='username'>{username}</span>
          </div>
          <br/>
          <span className="title">{title}</span>
          <span className='feedback'>"{feedback}"</span>
        </Row>
        <hr/>
      </div>
    </Container>
  )
}
export default ReviewTemplate;
