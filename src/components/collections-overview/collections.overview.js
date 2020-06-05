import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

import PreviewCollection from '../preview/preview.js';

import './collections-overview.styles.scss';

const CollectionsOverview=({collections})=>(
    <div className='collection-overview'>
        {(collections || []).map(({id, ...otherCollectionProps})=>(
                <PreviewCollection key={id} {...otherCollectionProps}/>
            ))
        }
    </div>)

const mapStateToProps= createStructuredSelector(
    {collections: selectCollections});

export default connect(mapStateToProps)(CollectionsOverview);