import React, { useState, useEffect } from 'react'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
// import King from '../../../../assets/King.png';
import CollectionItem from '../../collection-item/CollectionItem.jsx';
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
// import Link from 'react-dom';
import './itemList.styles.scss';
// import Breadcrumb from '../../../utility/breadcrumb/Breadcrumb.jsx';
// import Button from 'react-bootstrap/Button';
// import {Row, Col} from 'react-bootstrap/';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import Radio from '../../../utility/radioButton/RadioButton.jsx';
// import { Items, PaginatedItems } from '../../../utility/pagination/Pagination';

export default function ItemList(props) {
  const { fullItemList, onItemSelection, categoryRedirect, priceFilterData,
    priceFilterTitle, onFilterClick, onSortClick, toItemDetailsClick, handleClearStateClick } = props;

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(null);

  // console.log("FULLITEMLIST", fullItemList)
  // function getRandom(array) {
  //   let i = array.length -1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }

  const categoryTitles = ['SNEAKERS', 'HATS','SHIRTS', 'JACKETS', 'SALE']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Container fluid="true" className='itemListPreview'>
        {
          priceFilterTitle ?
            <span  className="title"> {priceFilterTitle}</span>
          :
          <>
            <span id="title">SHOP</span>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <p className="categoryLabel"><strong>Select a Category:</strong></p><br/>
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
            </>
        }
        <br/>
        <div className='optionsContainer'>
          {
            priceFilterTitle ?
              null
            :
            <>
                <Radio 
                  onClick={()=> onFilterClick({radioValue})} 
                  onFilterClick={onFilterClick}
                  />
              <br/>
            </>

          }
          <div className="sortContainer">
            <span>Sort by Price: </span>
            {
              priceFilterData ?
                <div>
                  <input value="H2L" type="radio" name='sort' id="sortStatus" onChange={() => onSortClick('H2L')}/> High to Low &nbsp;&nbsp;
                  <input value="L2H" type="radio" name='sort' id="sortStatus" onChange={() => onSortClick('L2H')}/> Low to High
                </div>
              :
                <div>
                  <input value="H2L" type="radio" name='sort' id="sortStatus" onChange={() => onSortClick('High2Low')}/> High to Low &nbsp;&nbsp;
                  <input value="L2H" type="radio" name='sort' id="sortStatus" onChange={() => onSortClick('Low2High')}/> Low to High
                </div>
            }

          </div>
        </div>
        
        <div className='preview'
          style={{ 
            flexWrap: 'wrap',
            display: 'flex',
            alignContent: 'space-between',
            justifyContent: 'center',
            // columns: '2 auto',
          }}
        >
        {
          priceFilterData ? 
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
          :
            fullItemList.map(({id, ...props}) => (
              <CollectionItem
                id={id}
                handleClearStateClick={handleClearStateClick}
                toItemDetailsClick={toItemDetailsClick}
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

