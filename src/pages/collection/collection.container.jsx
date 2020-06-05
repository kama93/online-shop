import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpiner from '../../components/withspiner/with-spiner';

import Collection from './collection';

const mapStateToProps= createStructuredSelector({
  isLoading: state=> !selectIsCollectionsLoaded(state)
});

const CollectionContainer= compose(
    connect(mapStateToProps),
    WithSpiner)(Collection);

    export default CollectionContainer