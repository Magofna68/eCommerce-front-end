import './reviewTemplate.styles.scss';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star';

 const ReviewTemplate = (props)  => {
  const { key, id, date, feedback, title, rating, username } = props;
  return (
    <Container fluid className="reviewContainer">
      <div className='review'>
        <Row>
          <div className="upperReviewContainer" style={{padding: '0 3px 0 5px'}}>
            <span className='rating'>{rating} <StarIcon fontSize="small" /></span>
            <span className='username'>{username}</span>
            <span className="date">{date}</span>
          </div>
          <br/>
          <strong style={{padding: '0% 0 0 3%'}}>{title}</strong>
          <br/>
          <span className='feedback'>"{feedback}"</span>
        </Row>
      </div>
    </Container>
  )
}
export default ReviewTemplate;
