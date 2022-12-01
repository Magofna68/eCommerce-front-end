import React from 'react'
import './sizeList.styles.scss';

export default function SizeList(props) {
  const { id, value, selected, setSelectedSize, active, onSizeSelect } = props;
  return (
    
      <li 
        key={id}
        // className={`shoeSize ${active ? 'active' : ''}`}
        className={active ? "shoeSize active" : 'shoeSize'}
        onClick={() =>  onSizeSelect(id)}
        // setSelectedSize({id: id, value: value, selected: true})
        // console.log(selectedSize) 
      >
        {value}
      </li>
    
  )
}
