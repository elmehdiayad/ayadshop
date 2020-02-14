import React from 'react'

import CollectionsOverviewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop-page/shop-page.actions';




class ShopPage extends React.Component {

  
  componentDidMount(){
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }
  render(){
    const {match} = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> 
      </div>
    );
  }
}



const mapDispatchToState = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToState)(ShopPage);