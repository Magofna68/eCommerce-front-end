import './itemDetailPage.styles.scss';
import React from 'react'
import {useLocation } from 'react-router-dom';


export default function ItemDetailPage(props) {
  const location = useLocation();
  let name = location.state.name
  let id= location.state.id
  let img = location.state.img
  let price = location.state.price
  let desc = location.state.desc
  
  return (

    <div>
    <h2>ItemDetailPage</h2>
    <h4>{name}</h4>
    <h5>{name}</h5>
    <img src={img} alt="test" width="500px"></img>
    <button onClick={()=>console.log(name)}>Try Me</button>
    </div>
    )
}

