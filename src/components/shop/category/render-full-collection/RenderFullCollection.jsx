import React from 'react'
import FullCollectionItem from '../full-collection-item/FullCollectionItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const RenderFullCollection = ({title, items}) => (
  <Container fluid
      className='collection'
    >
      <Row>
        <h1 
          className='title'
          style={{
            fontSize: '28px',
            marginBottom: '25px',
            marginTop: '25px',
            fontWeight: '700',
          }}
        >
          {title.toUpperCase()}
        </h1>
      </Row>
          <div 
            className='preview'
            style={{ 
              flexWrap: 'wrap',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
            }}
            >
            {
              items.map(({id, ...otherItemProps}) => (
                <FullCollectionItem key={id} id={id}{...otherItemProps} />
                ))
              };
          </div>
  </Container>
)

export default RenderFullCollection;

