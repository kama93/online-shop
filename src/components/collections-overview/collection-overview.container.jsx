import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpiner from '../withspiner/with-spiner';
import CollectionOverview from './collections.overview';


const mapStateToProps= createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpiner
    )(CollectionOverview);

export default CollectionOverviewContainer;