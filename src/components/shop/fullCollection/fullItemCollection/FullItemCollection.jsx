import React from 'react'
import SingleItem from '../singleItem/SingleItem.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 export const FullItemCollection = ({ testClick, title, items, routeName, selectedItem, onItemSelection, filteredList, handleHomeClick}) => (
    <Container fluid="true" className='collection'>
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
              testClick={testClick}
              title={title} 
              id={id} 
              handleHomeClick={handleHomeClick}
              handleItemSelection={onItemSelection} 
              items={items}
              {...otherItemProps} 
            />
            ))
          :
          items.map(({id, ...otherItemProps}) => (
            <SingleItem
              testClick={testClick}
              key={id} 
              title={title} 
              id={id} 
              handleHomeClick={handleHomeClick}
              handleItemSelection={onItemSelection} 
              items={items}
              {...otherItemProps} 
            />
            ))
          }
      </div>
    </Container>
  )

export default FullItemCollection;

