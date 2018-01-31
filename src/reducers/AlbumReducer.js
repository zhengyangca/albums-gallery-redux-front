import SearchInput, {createFilter} from 'react-search-input'


export default function AlbumReducer(state = {}, action) {
    const albums = state.albums
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
            }
        default:
            return {
                albums: albums,
                filteredAlbums: albums,
            }
    }
}