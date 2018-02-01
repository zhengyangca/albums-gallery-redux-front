import {connect} from 'react-redux'
import * as actions from '../actions'
import Sidebar from '../components/Sidebar'

function mapStateToProps(state) {
    // console.log(state.AlbumReducer.filteredAlbums);
    return {
        albums: state.AlbumReducer.filteredAlbums
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAll: () => dispatch(actions.getAll()),
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleSidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default VisibleSidebar;