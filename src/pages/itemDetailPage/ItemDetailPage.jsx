import './itemDetailPage.styles.scss';
import React from 'react'

export default function ItemDetailPage({title, id, name, price, img, img2}) {
  return (
    <div>
      <h2>ItemDetailPage</h2>
      <h4>{title}</h4>
      <h5>{name}</h5>
      <img src={img} alt="test"></img>

    </div>
  )
}
