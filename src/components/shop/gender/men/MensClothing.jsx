import React, { Component } from 'react';
import { MENS_SHOP_LIST } from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import King from '../../../../assets/King.png';
import './mensClothing.styles.scss';
import ItemDetailPage from '../../../../pages/itemDetailPage/ItemDetailPage';
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail';



class MensClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      itemList:  MENS_SHOP_LIST ,
    }
  }
  

  handleClick = (e) => {
    if (this.state.selectedItem != null) {
      this.setState({selectedItem: null})
    }
  }


  handleChangingSelectedItem = (id) => {
    console.log(id)
    const selectedItem = id;
    // const selectedItem = this.state.itemList.filter(item => item.id.includes(id));
    // const selectedItem = this.state.itemList.filter(item => item.id === id[0])
    console.log(selectedItem)
    // const selectedItem = props;
    this.setState({
      selectedItem: selectedItem
    })

    console.log(this.state.itemList)
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    // let { itemList, selectedItem, handleChangingSelectedItem} = this.state;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = 
      <ItemDetail 
        itemToShow={this.state.selectedItem} 
      />
      buttonText = "Back to Items"
    } else { 
      currentlyVisibleState = 
      <ItemList 
        itemCollection={this.state.itemList} 
        onItemSelection={this.handleChangingSelectedItem} 
      />
      // buttonText = "Item List Page"
    }


    return (
      <div>
        {
          !buttonText ?
        <div className="backdropContain">
          <div className='backdropMobile'>
            <h1>Men's</h1><h1>Clothing</h1>
          </div>
            <img src={King} alt="KINGs" width="150px" style={{zIndex: -1}}/>
        </div>
        :
        null
        }
        {currentlyVisibleState}
        <hr/>
        {
          buttonText ? 
          <Button onClick={this.handleClick}>{buttonText}</Button>
          :
          null
        }
      </div>
    );
  }
}

export default MensClothing;
// MensClothing.propTypes = {

// };


// export default function MensClothing() {
//   return (
//     <div>
        // <div className="backdropContain">
        //   <div className='backdropMobile'>
        //     <h1>Men's</h1><h1>Clothing</h1>
        //   </div>
        //     <img src={King} alt="KINGs" width="150px" style={{zIndex: -1}}/>
        // </div>

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
