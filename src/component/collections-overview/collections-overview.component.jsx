import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop-page/shop-page.selector';



const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(({id,...OtherProps}) => (<CollectionPreview key={id} {...OtherProps}/>))}
  </div>
);


const mapStateToProps = createStructuredSelector ({
  collections: selectCollectionsPreview
})


export default connect(mapStateToProps)(CollectionsOverview);