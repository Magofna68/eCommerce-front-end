import React from 'react'
// import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import CollectionItem from '../../collection-item/CollectionItem';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import { PropTypes } from 'prop-types';
import Container from 'react-bootstrap/Container';
import Link from 'react-dom';
import './itemList.styles.scss';


export default function ItemList(props) {
  // const { mensCollection, onItemSelection } = props;
  let mensCollection = props.mensCollection;
  let onItemSelection = props.onItemSelection;

  return (
  
        <Container fluid="true" className='collectionPreview'>
          <h1>Shop Men's</h1>
          {/* <div className='titleContainer'> */}
          {/* <h2>
            <Link className="nav-link" to={'/shop/'+ mensCollection.title}>
              {mensCollection.title.toUpperCase()}
            </Link>
          <hr />
          </h2> */}
          <div 
            className='preview'
            style={{ 
              flexWrap: 'wrap',
              display: 'flex',
              alignContent: 'space-between',
              justifyContent: 'center',
              marginTop: '10%',
            }}
          >
        {
          mensCollection.map(({id, ...props}) => (
            <CollectionItem
              key={id}
              handleItemSelection={onItemSelection}
              {...props}
            />
            )
          )
        }
      </div>
    {/* </div> */}
  </Container>
  )
}

ItemList.propTypes = {
  item: PropTypes.object,
  mensCollection: PropTypes.array,
  onItemSelection: PropTypes.func,
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

