import React, { Component } from 'react';
import { WOMENS_SHOP_LIST } from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';
import Queen from '../../../../assets/Queen.png';
import './womensClothing.styles.scss';
import ItemDetailPage from '../../../../pages/itemDetailPage/ItemDetailPage';
import ItemList from '../itemList/ItemList';
import Button from 'react-bootstrap/Button';
import ItemDetail from '../../../../pages/itemDetailPage/ItemDetail';



class WomensClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      itemList:  WOMENS_SHOP_LIST ,
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
            <h1>Women's</h1><h1>Clothing</h1>
          </div>
            <img src={Queen} alt="Queen" width="150px" style={{zIndex: -1}}/>
        </div>
        :
        null
        }
        {currentlyVisibleState}
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

export default WomensClothing;








// import React from 'react'
// import { WOMENS_SHOP_DATA } from '../../../../data'
// import CollectionPreview from '../../preview-collection/CollectionPreview'
// import Queen from '../../../../assets/Queen.png';
// import './womensClothing.styles.scss';

// export default function WomensClothing() {
//   return (
//     <div>
//         <div className='backdropLogo'
//         // style={{
//         //   display: 'flex',
//         //   width: '96vw',
//         //   position: 'fixed',       
//         //   color: 'grey',
//         //   justifyContent: 'center',
//         //   alignItems: 'center',
//         //   zIndex: -1,
//         //   flexDirection: 'column'
//         // }}
//         >
//           <div className='backdropMobile'
//           // style={{
//           //   display: 'flex', 
//           //   justifyContent: 'space-around', 
//           //   width: '600px', 
//           //   marginBottom: '-15%', 
//           //   marginTop: '5%'
//           //   }}
//           >
//             <h1>Women's</h1><h1>Clothing</h1>
//           </div>
//             <img src={Queen} alt="Queens" width="150px" style={{zIndex: -1}}/>
//         </div>

//       {
//         WOMENS_SHOP_DATA.map(({id, ...otherCollectionProps}) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))
//       }
//     </div>
//   )
// }
