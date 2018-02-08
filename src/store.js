import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import AlbumReducer from './reducers/AlbumReducer'

import lery_albums from './lery_albums.json'
import gigi_albums from './gigi_albums.json'
import sugar_albums from './data_sugar.json'
import xiaoyao_albums from './data_xiaoyao.json'
import axios from "axios/index";


const reducer = combineReducers({
    CountReducer,
    AlbumReducer
});

let data_albums = []

// data format
gigi_albums.map(data_album => {
    let album_unit = {}
    album_unit.album_name = data_album.name;
    album_unit.model_name = "夏茉GiGi";
    album_unit.category = "sexy";
    album_unit.img_urls = [];
    data_album.contents.map(content => {
        album_unit.img_urls.push(content.name)
    });
    data_albums.push(album_unit);
});

sugar_albums.map(data_album => {
    let album_unit = {}
    album_unit.album_name = data_album.name;
    album_unit.model_name = "李居利Sugar";
    album_unit.category = "sexy";
    album_unit.img_urls = [];
    data_album.contents.map(content => {
        album_unit.img_urls.push(content.name)
    });
    data_albums.push(album_unit);
});

xiaoyao_albums.map(data_album => {
    let album_unit = {}
    album_unit.album_name = data_album.name;
    album_unit.model_name = "妮小妖黄楽然xiaoyao";
    album_unit.category = "sexy";
    album_unit.img_urls = [];
    data_album.contents.map(content => {
        album_unit.img_urls.push(content.name)
    });
    data_albums.push(album_unit);
});
//================== New Data that from static file server 5050=====================
let new_albums = [];
let newdata = [];
axios.get('http://localhost:5050/fetch/')
    .then(response => {
        newdata = response.data;
        // console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
console.log(newdata);
//==================================================================================


data_albums.push(lery_albums[0]);

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
