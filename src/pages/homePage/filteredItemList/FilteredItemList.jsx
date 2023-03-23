import React, { useState, useEffect } from 'react'
import CollectionItem from '../../../components/shop/collection-item/CollectionItem.jsx'
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import './filteredItemList.styles.scss';
import Radio from '../../../components/utility/radioButton/RadioButton.jsx';

export default function FilteredItemList(props) {
  const { onItemSelection, priceFilterData, priceFilterTitle, onSortClick, toItemDetailsClick, handleClearStateClick } = props;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <Container fluid="true" className='filteredItemListPreview'>
        <span  className="title"> {priceFilterTitle}</span>
        <br/>

        <div className='optionsContainer'>
          <div className="sortContainer">
            <span>Sort by Price: </span>
              <div>
                <input value="H2L" type="radio" name='sort' id="sortStatus" onChange={() => onSortClick('H2L')}/> High to Low &nbsp;&nbsp;
                <input value="L2H" type="radio" name='sort' id="sortStatus" onChange={() => onSortClick('L2H')}/> Low to High
              </div>
          </div>
        </div>
        
        <div className='preview'>
          {
            priceFilterData.map(({id, ...props}) => (
              <CollectionItem
                id={id}
                handleClearStateClick={handleClearStateClick}
                toItemDetailsClick={toItemDetailsClick}
                key={id}
                handleItemSelection={onItemSelection}
                {...props}
                />
            ))
          }
      </div>
  </Container>
  )
}

FilteredItemList.propTypes = {
  item: PropTypes.object,
  mensCollection: PropTypes.array,
  onItemSelection: PropTypes.func,
}
