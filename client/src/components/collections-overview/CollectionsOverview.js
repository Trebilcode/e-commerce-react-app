import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './CollectionsOverview.scss';
import PreviewCollection from '../preview-collection/PreviewCollection';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
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


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);