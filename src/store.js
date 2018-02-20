import {createStore} from 'redux'
import * as actions from './actions'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import AlbumReducer from './reducers/AlbumReducer'

import axios from "axios/index";

const reducer = combineReducers({
    CountReducer,
    AlbumReducer
});

let data_albums = [];

const initialState = {
    CountReducer: {
        count: 123,
        wish_value: 12,
    },
    AlbumReducer: {
        albums: data_albums,
        gallery: [],
        lightBox: {
            isOpen: false,
            photoIndex: 0,
        },
        filteredAlbums: [],
        catalogues: [],
    }
};


let store = createStore(reducer, initialState);

console.log('start axios.get');
axios.get('http://localhost:5050/fetch/')
    .then(response => {
        let server_albums = response.data;
        store.dispatch(actions.fetchAlbum(server_albums));
    })
    .catch(function (error) {
        console.log(error);
    });


export default store;
