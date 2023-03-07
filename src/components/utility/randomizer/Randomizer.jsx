// import React from 'react';
// import './randomizer.styles.scss';
// import CollectionItem from '../../shop/collection-item/CollectionItem';

// export default function Randomizer(props) {
//   const { array, onItemSelection, } = props;

//   const GetRandom = (array) => {
//   let i = array.length -1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//     const test = array.splice(2, Infinity)
//     console.log("Test", array)
//   return array;
//   }

//   return (
//       GetRandom(array).map(({id, img, price, name, ...props}) => (
//         <div className="randomizerContainer">
//           <CollectionItem
//             key={id}
//             img={img}
//             price={price}
//             name={name}
//             handleItemSelectiond={onItemSelection}
//             {...props}
//             />
//           </div>
//       )
//     )
//   )
// }
