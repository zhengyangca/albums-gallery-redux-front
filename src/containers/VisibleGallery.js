import {connect} from 'react-redux'
import * as actions from '../actions'
import Gallery from '../components/Gallery'

function mapStateToProps(state, ownProps) {
    let found_album = state.AlbumReducer.albums.find((element) => {
        return element.album_name === ownProps.album2see
    });
    // console.log(found_album);
    return {
        album_name: found_album.album_name,
        model_name: found_album.model_name,
        img_urls: found_album.img_urls,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAll: () => dispatch(actions.getAll()),
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleGallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default VisibleGallery;