import React from 'react'

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop-page/shop-page.actions';
import WithSpinner from '../../with-spinner/with-spinner.component';


const CollectionsOverviewWS = WithSpinner(CollectionsOverview);
const CollectionPageWS =WithSpinner(CollectionPage);


class ShopPage extends React.Component {

  state = {
    loading: true
  };

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    // fetch('https://firestore.googleapis.com/v1/projects/ayadshop-d93dc/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections))
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false})
    });
  }
  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWS isLoading={loading} {...props}/> } />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWS isLoading={loading} {...props}/>} /> 
      </div>
    );
  }
}

const mapDispatchToState = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToState)(ShopPage);