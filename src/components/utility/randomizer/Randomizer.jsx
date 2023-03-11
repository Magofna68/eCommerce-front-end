import React from 'react';
// import './randomizer.styles.scss';
import CollectionItem from '../../shop/collection-item/CollectionItem';
import { Card, Container } from 'react-bootstrap';
import SingleItem from '../../shop/fullCollection/singleItem/SingleItem';

export default function Randomizer(props) {
  const { array, onItemSelection, getRandom} = props;

  // function getRandom(array) {
  // let i = array.length -1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   const test = array.splice(2, Infinity)
  //   console.log("Test", array)
  // return array;
  // }

  return (
    <div styles={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
    <h1>TRENDING</h1>
      {getRandom(array).map(({name, img, alt}) => (
        <div>
        <SingleItem
          name={name}
          img={img}
          alt={alt} 
        />
        </div>
  
  // <Container className="cardContainer">
  //   <Card>
  //     <img src={img} alt={alt} width="100%"/>
  //     <Card.Title>{name}</Card.Title>
  //   </Card>
  // </Container>
  )
  )}
  </div>
  )
}
