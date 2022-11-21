import React, { Component } from 'react';
import { MENS_SHOP_LIST } from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import './mensClothing.styles.scss';
import ItemDetailPage from '../../../../pages/itemDetailPage/ItemDetailPage';
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';




class MensClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      itemList: MENS_SHOP_LIST,
    }
  }


  render() {
    let currentlyVisibleState = null;
    let { itemList } = this.state;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetailPage />
    } else { 
      currentlyVisibleState = 
      <ItemList mensCollection={itemList}/>
    }
    return (
      <div>
        {currentlyVisibleState}
        <Button onClick={() => console.log(itemList)}>Mens Clothing rendered</Button>
      </div>
    );
  }
}

// MensClothing.propTypes = {

// };

export default MensClothing;

// export default function MensClothing() {
//   return (
//     <div>
//         <div className="backdropContain">
//           <div className='backdropMobile'>
//             <h1>Men's</h1><h1>Clothing</h1>
//           </div>
//             <img src={King} alt="KINGs" width="150px" style={{zIndex: -1}}/>
//         </div>

//       <div>
//         {
//           mensCollections.map(({id, ...otherCollectionProps}) => (
//             <CollectionPreview key={id} {...otherCollectionProps} />
//           ))
//         }
//       </div>

//     </div>
//   )
// }
