import {connect} from 'react-redux'
import * as actions from '../actions'
import Frame from '../components/Frame'

function mapStateToProps(state, ownProps) {
    let found_album = state.AlbumReducer.filteredAlbums.filter((element) => {
        return element.model_name === ownProps.model_name
    });

    found_album = (ownProps.model_name === undefined) ? state.AlbumReducer.albums : found_album;

    return {
        albums: found_album
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