import React from 'react'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import CollectionItem from '../../collection-item/CollectionItem.jsx';
import CollectionPreview from '../../preview-collection/CollectionPreview.jsx';
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import Link from 'react-dom';
import './itemList.styles.scss';
import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';
import Row from 'react-bootstrap/Row'
import { Items, PaginatedItems } from '../../../utility/pagination/Pagination';

export default function ItemList(props) {
  const { FullItemList, onItemSelection, categoryRedirect, priceFilterData, priceFilterTitle } = props;

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

  const categoryTitles = ['SNEAKERS', 'SHIRTS', 'HATS', 'JACKETS', 'SALE']

  return (
    <>
    <span 
      style={{ 
        margin: '0', 
        height: '30px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'left', 
        alignContent: 'left', 
        alignItems: 'left'
    }}>
      <Breadcrumb />
    </span>
    {/* <div> */}
      {
        priceFilterTitle ?
        <span className="title"><h1>{priceFilterTitle}</h1></span>
        :
        <span className="title"><h1>SHOP</h1></span>
      }
    {/* </div> */}
        <Container fluid="true" className='collectionPreview'>
            {
              priceFilterData ?
              null
              :
              <Row style={{width: '90%', margin: 'auto', marginTop: '-2%'}}>
                <ul className='titleContainer'>
                  {
                    categoryTitles.map((title, index) => (
                      <li className="categoryTitle" key={index} onClick={()=> categoryRedirect(title)}>{title}</li>
                      ))
                  }
                </ul>
              </Row>
                  }
          <div className='preview'
            style={{ 
              flexWrap: 'wrap',
              display: 'flex',
              alignContent: 'space-between',
              justifyContent: 'center',
              marginTop: '3%',
            }}
          >
        {
          priceFilterData ? 
            getRandom(priceFilterData).map(({id, ...props}) => (
              <CollectionItem
                key={id}
                handleItemSelection={onItemSelection}
                {...props}
                />
            ))
          :
            getRandom(FullItemList).map(({id, ...props}) => (
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

