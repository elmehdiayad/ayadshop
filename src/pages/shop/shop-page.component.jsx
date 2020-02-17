import React, { useEffect } from 'react'

import CollectionsOverviewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop-page/shop-page.actions';




const ShopPage = ({fetchCollectionsStart, match}) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> 
    </div>
  );

}



const mapDispatchToState = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToState)(ShopPage);