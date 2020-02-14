import { createStructuredSelector } from "reselect";
import { selectIsFetchingCollection } from "../../redux/shop-page/shop-page.selector"
import { compose } from "redux";
import { connect } from "react-redux";
import CollectionsOverview from "./collections-overview.component"
import WithSpinner from '../../with-spinner/with-spinner.component'



const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollection 
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;