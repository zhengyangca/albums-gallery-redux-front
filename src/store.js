import {createStore, applyMiddleware} from 'redux'
import * as actions from './actions'
import thunk from 'redux-thunk';
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
        gallery: {},
        lightBox: {
            isOpen: false,
            photoIndex: 0,
        },
        filteredAlbums: [],
        catalogues: [],
    }
};


let store = createStore(reducer, initialState,
    applyMiddleware(thunk)
);

console.log('start axios.get');
axios.get('http://linode.zhengyang.ca:5050/fetch/')
    .then(response => {
        let server_albums = response.data;
        console.log('fetch data completed, go dispatch');
        store.dispatch(actions.fetchAlbum(server_albums));
    })
    .catch(function (error) {
        console.log(error);
    });

console.log('export store');
export default store;
