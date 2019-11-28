import React, { Component } from 'react';



import SHOP_DATA from './shopData';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

class ShopPage extends Component {

  state = {
    collections: SHOP_DATA
    
  }
  render() {

    const { collections } = this.state;
    return(
      <div className='shop-page'>

      {
        collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection 
            key={id} 
            {...otherCollectionProps} />
            ) 
        )   
      }

      </div>
    );
  }
}


export default ShopPage;