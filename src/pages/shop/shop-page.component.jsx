import React from 'react'

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import WithSpinner from '../../with-spinner/with-spinner.component';
import { selectIsFetchingCollection, selectIsCollectionsLoaded } from '../../redux/shop-page/shop-page.selector';
import { fetchCollectionsStartAsync } from '../../redux/shop-page/shop-page.actions';


const CollectionsOverviewWS = WithSpinner(CollectionsOverview);
const CollectionPageWS =WithSpinner(CollectionPage);


class ShopPage extends React.Component {

  
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }
  render(){
    const {match, isCollectionsFetching, isCollectionsLoaded} = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWS isLoading={isCollectionsFetching} {...props}/> } />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWS isLoading={!isCollectionsLoaded} {...props}/>} /> 
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsFetchingCollection,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToState = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToState)(ShopPage);