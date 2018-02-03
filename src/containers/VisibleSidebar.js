import {connect} from 'react-redux'
import * as actions from '../actions'
import Sidebar from '../components/Sidebar'

function mapStateToProps(state) {
    // console.log(state.AlbumReducer.catalogues);
    // console.log(state.AlbumReducer.catalogues);
    return {
        catalogues: state.AlbumReducer.catalogues,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default VisibleSidebar;