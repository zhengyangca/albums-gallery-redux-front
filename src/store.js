import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import AlbumReducer from './reducers/AlbumReducer'

import data_albums from './data_albums.json'


const reducer = combineReducers({
    CountReducer,
    AlbumReducer
});


const catalogues = [];
data_albums.map(album => {
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

const initialState = {
    CountReducer: {
        count: 123,
        wish_value: 12,
    },
    AlbumReducer: {
        albums: data_albums,
        gallery: data_albums[0],
        lightBox: {
            isOpen: false,
            photoIndex: 0,
        },
        filteredAlbums: [],
        catalogues: catalogues,
    }

};


let store = createStore(reducer, initialState);

export default store;
