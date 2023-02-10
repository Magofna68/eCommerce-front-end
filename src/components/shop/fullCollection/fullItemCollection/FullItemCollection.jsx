import React from 'react'
import SingleItem from '../singleItem/SingleItem.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';


 export const FullItemCollection = ({title, items, routeName, selectedItem, onItemSelection, filteredList}) => (
    <Container fluid="true" className='collection'>
      {/* <Row style={{ margin: '0 0 0 0'}}>
        <Breadcrumb />
      </Row> */}
      <Row style={{ margin: '0 0 0 0'}}>
        <h1 
          style={{
            fontSize: '2em',
            marginBottom: '1em',
            marginTop: '.75em',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          {title.toUpperCase()}
        </h1>
      </Row>
      <div 
        // className='preview'
        style={{ 
          flexWrap: 'wrap',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        {
          filteredList !== undefined ?
          filteredList.map(({id, ...otherItemProps}) => (
            <SingleItem 
              key={id} 
              title={title} 
              id={id} 
              handleItemSelection={onItemSelection} 
              {...otherItemProps} 
            />
            ))
          :
          items.map(({id, ...otherItemProps}) => (
            <SingleItem 
              key={id} 
              title={title} 
              id={id} 
              handleItemSelection={onItemSelection} 
              {...otherItemProps} 
            />
            ))
          };
      </div>
    </Container>
  )

export default FullItemCollection;
