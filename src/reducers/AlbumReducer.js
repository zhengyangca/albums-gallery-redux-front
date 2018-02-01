import {createFilter} from 'react-search-input'


export default function AlbumReducer(state = {}, action) {
    const albums = state.albums;
    const gallery = state.gallery;
    switch (action.type) {
        case 'get_all':
            return {
                albums: albums
            }
        case 'search':
            const term = action.term;
            const KEYS_TO_FILTERS = ['model_name', 'album_name', 'category'];
            const filteredAlbums = albums.filter(createFilter(term, KEYS_TO_FILTERS));
            console.log(term);
            return {
                albums: albums,
                filteredAlbums: filteredAlbums,
                gallery: state.gallery,
            }
        case 'init_gallery':
            console.log(action.album2see.album2see);
            let found_album = albums.find((element) => {
                return element.album_name === action.album2see.album2see
            });
            return {
                albums: albums,
                filteredAlbums: albums,
                gallery: found_album,
            }
        default:
            return {
                albums: albums,
                filteredAlbums: albums,
                gallery: gallery,
            }
    }
}