import './reviewTemplate.styles.scss';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star';

 const ReviewTemplate = (props)  => {
  const { key, id, date, feedback, title, rating, username, reviewStars } = props;
  
  
  return (
    <Container fluid className="reviewContainer">
      <div className='review'>
        <Row>
          <div className="upperReviewContainer" style={{padding: '0 3px 0 5px'}}>
            <span className='rating'>{reviewStars(rating)}({rating})</span>
            <span className="date">{date}</span>
            <span className='username'>{username}</span>
          </div>
          <br/>
          <span className="title">{title}</span>
          <br/>
          <span className='feedback'>"{feedback}"</span>
        </Row>
        <hr/>
      </div>
    </Container>
  )
}
export default ReviewTemplate;
