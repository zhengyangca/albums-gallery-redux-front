import {createFilter} from 'react-search-input'


export default function AlbumReducer(state = {}, action) {
    const albums = state.albums;
    switch (action.type) {
        case 'fetchAlbum':
            // console.log('fetch album');
            const server_albums = action.server_albums;
            let catalogues = [];
            server_albums.map(album => {
                let found_model = catalogues.find((element) => {
                    return element.model_name === album.model_name;
                });

                if (found_model === undefined) { //model not in
                    catalogues.push({
                        model_name: album.model_name,
                        model_albums: [],
                    });
                    found_model = catalogues[catalogues.length - 1];
                }
                found_model.model_albums.push(album.album_name);
            });
            return {
                albums: server_albums,
                gallery: server_albums[0],
                lightBox: state.lightBox,
                filteredAlbums: state.filteredAlbums,
                catalogues: catalogues,
            };

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