import {createFilter} from 'react-search-input'


export default function AlbumReducer(state = {}, action) {
    const albums = state.albums;
    switch (action.type) {
        case 'search':
            const term = action.term;
            const KEYS_TO_FILTERS = ['model_name', 'album_name', 'category'];
            const filteredAlbums = albums.filter(createFilter(term, KEYS_TO_FILTERS));
            console.log(term);
            return {
                albums: albums,
                filteredAlbums: filteredAlbums,
                gallery: state.gallery,
                catalogues: state.catalogues,
            };

        case 'initGallery':
            const found_album = state.albums.find((element) => {
                return element.album_name === action.album2see
            });
            return {
                albums: state.albums,
                gallery: found_album,
                filteredAlbums: state.filteredAlbums,
                catalogues: state.catalogues,
                lightBox: state.lightBox,
            };

        default:
            return {
                albums: state.albums,
                gallery: state.gallery,
                lightBox: state.lightBox,
                filteredAlbums: state.filteredAlbums,
                catalogues: state.catalogues,
            }
    }
}