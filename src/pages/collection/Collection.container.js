import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsIsLoading } from '../../redux/shop/shop.selectors';
import WithSpinner  from '../../components/with-spinner/WithSpinner';
import CollectionPage from './Collection';


const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsIsLoading
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)
