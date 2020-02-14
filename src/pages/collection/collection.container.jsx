import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop-page/shop-page.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../with-spinner/with-spinner.component";
import CollectionPage from './collection.component'





const mapStateToprops = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded
})

const CollectionPageContainer = compose (
  connect(mapStateToprops),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer; 