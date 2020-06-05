import React from 'react';
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { connect } from 'react-redux'
import CollectionContainer from '../collection/collection.container';
import { Route } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';




class ShopPage extends React.Component {
    
    componentDidMount() {
      const {fetchCollectionsStartAsync}= this.props;
      fetchCollectionsStartAsync();
    }
    
    render(){
        const {match}= this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
                  )}
                />
            </div>
            )}
    }


const mapDispatchToProps= dispatch=>({
  fetchCollectionsStartAsync:()=> dispatch(fetchCollectionsStartAsync())
});
 

export default connect(null, mapDispatchToProps)(ShopPage);