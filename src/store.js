import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import AlbumReducer from './reducers/AlbumReducer'

const reducer = combineReducers({
    CountReducer,
    AlbumReducer
});

const initialState = {
    CountReducer: {
        count: 123,
        wish_value: 12,
        gallery_show: {
            album_name: '2015.08.13Vol.137',
            model_name: '夏茉GiGi',
            category: "sexy",
            img_urls: [
                '0.jpg',
                '001.jpg',
                '002.jpg',
                '003.jpg',
                '004.jpg',
                '005.jpg',
                '006.jpg',
                '007.jpg',
                '008.jpg',
                '009.jpg',
                '010.jpg',
                '011.jpg',
                '012.jpg',
                '013.jpg',
                '014.jpg',
                '015.jpg',
                '016.jpg',
                '017.jpg',
                '018.jpg',
                '019.jpg',
                '020.jpg',
                '021.jpg','022.jpg','023.jpg',
                '02.jpg',
                '0.jpg','0.jpg','0.jpg','0.jpg','0.jpg','0.jpg',
                '0.jpg',
                '0.jpg','0.jpg','0.jpg','0.jpg','0.jpg',



            ]
        },
    },
    AlbumReducer: {
        gallery: {
            album_name: '2015.08.13Vol.137',
            model_name: '夏茉GiGi',
            category: "comedy",
            img_urls: [
                '0.jpg',
                '001.jpg',
                '002.jpg',
                '003.jpg',
                '004.jpg',
                '005.jpg',
                '006.jpg',
                '007.jpg',
                '008.jpg',
                '009.jpg',
                '010.jpg',
                '011.jpg',
                '012.jpg',
                '013.jpg',
                '014.jpg',
                '015.jpg',
                '016.jpg',
                '017.jpg',
            ]
        },
        albums: [
            {
                album_name: '2015.09.15VOL.021',
                model_name: '夏茉GiGi',
                category: "sexy",
                img_urls: [
                    '0.jpg',
                    '001.jpg',
                    '002.jpg',
                    '003.jpg',
                    '004.jpg',
                    '005.jpg',
                    '006.jpg',
                    '007.jpg',
                    '008.jpg',
                    '009.jpg',
                    '010.jpg',
                    '011.jpg',
                    '012.jpg',
                    '013.jpg',
                    '014.jpg',
                    '015.jpg',
                    '016.jpg',
                    '017.jpg',
                ]
            },
            {
                album_name: '2015.08.30VOL.017',
                model_name: '夏茉GiGi',
                category: "comedy",
                img_urls: [
                    '0.jpg',
                    '001.jpg',
                    '002.jpg',
                    '003.jpg',
                    '004.jpg',
                    '005.jpg',
                    '006.jpg',
                    '007.jpg',
                    '008.jpg',
                    '009.jpg',
                    '010.jpg',
                    '011.jpg',
                    '012.jpg',
                    '013.jpg',
                    '014.jpg',
                    '015.jpg',
                    '016.jpg',
                    '017.jpg',
                ]
            },
            {
                album_name: '2015.10.09VOL.025',
                model_name: '夏茉GiGi',
                category: "comedy",
                img_urls: [
                    '015.jpg',
                    '001.jpg',
                    '002.jpg',
                    '003.jpg',
                    '004.jpg',
                    '005.jpg',
                    '006.jpg',
                    '007.jpg',
                    '008.jpg',
                    '009.jpg',
                    '010.jpg',
                    '011.jpg',
                    '012.jpg',
                    '013.jpg',
                    '014.jpg',
                    '015.jpg',
                    '016.jpg',
                    '017.jpg',
                ]
            },
            {
                album_name: '2016.04.04VOL.69',
                model_name: '夏茉GiGi',
                category: "comedy",
                img_urls: [
                    '0.jpg',
                    '001.jpg',
                    '002.jpg',
                    '003.jpg',
                    '004.jpg',
                    '005.jpg',
                    '006.jpg',
                    '007.jpg',
                    '008.jpg',
                    '009.jpg',
                    '010.jpg',
                    '011.jpg',
                    '012.jpg',
                    '013.jpg',
                    '014.jpg',
                    '015.jpg',
                    '016.jpg',
                    '017.jpg',
                ]
            },
        ],
        filteredAlbums: []
    }

};


let store = createStore(reducer, initialState);

export default store;
