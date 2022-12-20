import React from 'react'
import './shirts.styles.scss';
import RenderFullCollection from '../render-full-collection/RenderFullCollection';
import { SHOP_DATA } from '../../../../data';

export default function Shirts(props) {
  const { onItemSelection, mensFilteredShirts, itemToShow } = props;
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
          <RenderFullCollection filteredList={mensFilteredShirts} id={id} key={id} onItemSelection={onItemSelection} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
     

