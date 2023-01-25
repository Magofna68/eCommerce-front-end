import React from 'react'
import FullCollectionItem from '../full-collection-item/FullCollectionItem.jsx';
import CollectionItem from '../../collection-item/CollectionItem.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';


export const RenderFullCollection = ({title, items, routeName, selectedItem, onItemSelection, filteredList}) => (
  <Container fluid="true" className='collection'>
    <Row>
      <Breadcrumb />
      {/* <p>womens</p> */}
    </Row>
      <Row>
        <h1 
          className='title'
          style={{
            fontSize: '28px',
            marginBottom: '25px',
            marginTop: '25px',
            fontWeight: '700',
            textAlign: 'left',
            marginLeft: '8%'
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
              width: '100%'
            }}
            >
            {
              filteredList !== undefined ?
              filteredList.map(({id, ...otherItemProps}) => (
                <FullCollectionItem 
                  key={id} 
                  title={title} 
                  id={id} 
                  handleItemSelection={onItemSelection} 
                  {...otherItemProps} 
                />
                ))
              :
              items.map(({id, ...otherItemProps}) => (
                <FullCollectionItem 
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

export default RenderFullCollection;

