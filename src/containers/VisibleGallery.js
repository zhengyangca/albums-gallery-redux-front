import {connect} from 'react-redux'
import * as actions from '../actions'
import Gallery from '../components/Gallery'

function mapStateToProps(state) {
    const gallery = state.AlbumReducer.gallery;
    // console.log(gallery);
    return {
        album_name: gallery.album_name,
        model_name: gallery.model_name,
        img_urls: gallery.img_urls,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onInitGalley: () => dispatch(actions.initGallery(ownProps.album2see)),
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleGallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default VisibleGallery;