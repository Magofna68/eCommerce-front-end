import React from 'react'
import './sizeList.styles.scss';

export default function SizeList(props) {
  const { id, value, active, onSizeSelect } = props;
  return (
    
      <li 
        key={id}
        // className={`shoeSize ${active ? 'active' : ''}`}
        className={active ? "shoeSize active" : "shoeSize"}
        onClick={() =>  onSizeSelect(id, value)}
      >
        {value}
      </li>
    
  )
}
