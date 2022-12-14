import React from 'react'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import CollectionItem from '../../collection-item/CollectionItem';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import Link from 'react-dom';
import './itemList.styles.scss';
import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb';


export default function ItemList(props) {
  const { itemCollection, onItemSelection } = props;

  function getRandom(array) {
    let i = array.length -1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  return (
    <>
    <Breadcrumb />
        <Container fluid="true" className='collectionPreview'>
          <h1 style={{ marginLeft: '2%'}}>Shop</h1>
          {/* <div className='titleContainer'> */}
          {/* <h2>
            <Link className="nav-link" to={'/shop/'+ mensCollection.title}>
              {mensCollection.title.toUpperCase()}
            </Link>
          <hr />
          </h2> */}
          <div 
            className='preview'
            style={{ 
              flexWrap: 'wrap',
              display: 'flex',
              alignContent: 'space-between',
              justifyContent: 'center',
              marginTop: '10%',
            }}
          >
        {
          getRandom(itemCollection).map(({id, ...props}) => (
            <CollectionItem
              key={id}
              handleItemSelection={onItemSelection}
              {...props}
            />
            )
          )
        }
      </div>
  </Container>
  </>
  )
}

ItemList.propTypes = {
  item: PropTypes.object,
  mensCollection: PropTypes.array,
  onItemSelection: PropTypes.func,
}

