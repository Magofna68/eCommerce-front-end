import React from 'react'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import CollectionItem from '../../collection-item/CollectionItem';
import CollectionPreview from '../../preview-collection/CollectionPreview';


export default function ItemList(props) {
  const { mensCollection } = props;
  return (
    <div>
      <h1>ItemList</h1>
        {
          mensCollection.map(({id, ...otherCollectionProps}) => (
             <CollectionPreview key={id} id={id} {...otherCollectionProps} />
          ))
        }
    </div>
  )
}


// export default function ItemList(props) {
//   const { itemList, onItemSelection, onClick } = props;
//   return (
//     <div>
//       <div className="backdropContain">
//         <div className='backdropMobile'>
//           <h1>Men's</h1><h1>Clothing</h1>
//         </div>
//         <img src={King} alt="KINGs" width="150px" style={{zIndex: -1}}/>
//       </div>
//       <div>
//         {
//           // itemList.map(({id, ...otherCollectionProps}) => (

//             <div 
//             className='preview'
//             style={{ 
//               flexWrap: 'wrap',
//               display: 'flex',
//               alignContent: 'space-between',
//               justifyContent: 'center',
//             }}
//           >
              {/* limit to only 4 items to display; gets rerendered with component
              .filter((index)=> index < 4) */}
          //   { 
          //   itemList.map(({id, ...otherItemProps}) => (
          //       <CollectionItem key={id} id={id} onItemSelection={onItemSelection} handleClick={onClick} />
          //       // <CollectionItem key={id} id={id} routeName={props.routeName} {...otherItemProps} updateSelectedItem={props.whenItemClicked} />
          //       ))}
          // </div>

            // itemList.map((item) => 
            // <CollectionPreview 
            //   key={item.id}
            //   id={item.id}
            //   title={item.title}
            //   items={item.items}
            //   whenItemClicked={onItemSelection}
            //   handleSelectedClick={onClick}
            // />
              // key={item.id} {...otherCollectionProps} />
          // )
//         }
//       </div>
//     </div>
//   )
// }

