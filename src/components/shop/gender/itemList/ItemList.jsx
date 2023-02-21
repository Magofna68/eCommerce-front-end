import React, { useState } from 'react'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import CollectionItem from '../../collection-item/CollectionItem.jsx';
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import Link from 'react-dom';
import './itemList.styles.scss';
import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap/';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Radio from '../../../utility/radioButton/RadioButton.jsx';
// import { Items, PaginatedItems } from '../../../utility/pagination/Pagination';

export default function ItemList(props) {
  const { FullItemList, onItemSelection, categoryRedirect, priceFilterData, priceFilterTitle, onFilterClick, onSortClick } = props;
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(null);

  const radios = [
    { name: 'Under 25', value: '25' },
    { name: 'Under 50', value: '50' },
    { name: 'Under 75', value: '75' },
    { name: 'Under 100', value: '100' },
  ];
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
      <Container fluid="true" className='itemListPreview'>
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'left', 
            alignContent: 'left', 
            alignItems: 'left', 
            width: '100%' }}
        >
        </div>

        {
          priceFilterTitle ?
          <span  
            style={{ 
              color: 'black', 
              fontSize: '2em',
              marginBottom: '.75em',
              marginTop: '1em',
              fontWeight: '700',
              textAlign: 'center',
            }}>
              {priceFilterTitle}
          </span>
          :
          <span className="title"><h1>SHOP</h1></span>
        }
        {
          // coming from homepagelayout
          priceFilterData ?
            null
          :
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <ul className='titleListContainer'>
                {
                  categoryTitles.map((title, index) => (
                    <li className="categoryTitle" onClick={() => categoryRedirect(title)} key={index}>
                      {title.toUpperCase()}
                    </li>
                  ))
                }
              </ul>
            </div>
        }
        
        <div className='optionsContainer'>
          <div>
            <Radio 
              onClick={()=> onFilterClick({radioValue})} 
              onFilterClick={onFilterClick}
            />
          </div>
          <div>
            <span>Sort by Price: </span>
            <div>
              <input value="H2L" type="radio" name='sort' onChange={() => onSortClick('H2L')}/> High to Low &nbsp;&nbsp;
              <input value="L2H" type="radio" name='sort' onChange={() => onSortClick('L2H')}/> Low to High
            </div>
          </div>
        </div>
        
        <div className='preview'
          style={{ 
            flexWrap: 'wrap',
            display: 'flex',
            alignContent: 'space-between',
            justifyContent: 'center',
          }}
        >
        {
          priceFilterData ? 
            // getRandom(priceFilterData).map(({id, ...props}) => (
            priceFilterData.map(({id, ...props}) => (
              <CollectionItem
                key={id}
                handleItemSelection={onItemSelection}
                {...props}
                />
            ))
          :
            // getRandom(FullItemList).map(({id, ...props}) => (
            FullItemList.map(({id, ...props}) => (
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

