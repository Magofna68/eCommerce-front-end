import React from 'react'
import './shirts.styles.scss';
import RenderFullCollection from '../render-full-collection/RenderFullCollection.jsx';
import { SHOP_DATA } from '../../../../data.jsx';

export default function Shirts(props) {
  const { onItemSelection, filteredShirts, itemToShow } = props;
  const shirtCollection = [];
  shirtCollection.push(SHOP_DATA[3]);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <h1>{shirtCollection.title}</h1>
      {
        // mensFilteredList !== [] ?
        shirtCollection.map(({id, ...otherCollectionProps}) => (
          <RenderFullCollection filteredList={filteredShirts} id={id} key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
     

