import React from 'react'

import CollectionsOverviewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop-page/shop-page.actions';




class ShopPage extends React.Component {

  
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(null, mapDispatchToState)(ShopPage);