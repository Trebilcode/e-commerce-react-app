import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { selectIsCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>

        <Route 
        exact path={`${match.path}`} 
        render={(props) => <CollectionsOverviewWithSpinner 
        isLoading={!isCollectionsLoaded}{...props} />} 
        />
        <Route 
        path={`${match.path}/:collectionId`} 
        render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded}{...props}/>} 
        />

      </div>
    );
    }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectCollectionsLoaded
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ShopPage);