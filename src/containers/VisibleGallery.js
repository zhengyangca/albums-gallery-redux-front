import {connect} from 'react-redux'
import * as actions from '../actions'
import Gallery from '../components/Gallery'

function mapStateToProps(state) {
    const gallery = state.AlbumReducer.gallery;
    console.log(gallery);
    return {
        albums: state.AlbumReducer.albums,
        album_name: gallery === undefined ? '' : gallery.album_name,
        model_name: gallery === undefined ? '' :gallery.model_name,
        img_urls: gallery === undefined ? [] :gallery.img_urls,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    // console.log('ownProps.album2see = ' + ownProps.album2see);
    return {
        onInitGalley: () => {
            dispatch(actions.initGallery(ownProps.album2see))
        },
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleGallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

export default VisibleGallery;