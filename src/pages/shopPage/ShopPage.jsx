import React, { Component } from 'react';
import './shopPage.styles.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import  { SHOP_DATA }  from '../../data';
import CollectionPreview from '../../components/shop/preview-collection/CollectionPreview';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div fluid="true" className='shopPage'>
        {
            collections?.map(({id, ...otherCollectionProps})=> (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;