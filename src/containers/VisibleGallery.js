import {connect} from 'react-redux'
import * as actions from '../actions'
import Gallery from '../components/Gallery'

function mapStateToProps(state) {
    return {
        album_name: state.AlbumReducer.gallery.album_name,
        model_name: state.AlbumReducer.gallery.model_name,
        img_urls: state.AlbumReducer.gallery.img_urls,
    }
}

function mapDispatchToProps(dispatch, album2see) {
    return {
        initGallery: () => dispatch(actions.initGallery(album2see)),
        getAll: () => dispatch(actions.getAll()),
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleGallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default VisibleGallery;