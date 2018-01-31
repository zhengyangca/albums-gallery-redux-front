import {connect} from 'react-redux'
import * as actions from '../actions'
import Frame from '../components/Frame'

function mapStateToProps(state) {
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

const VisibleFrame = connect(
    mapStateToProps,
    mapDispatchToProps
)(Frame);

export default VisibleFrame;