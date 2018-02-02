import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import AlbumReducer from './reducers/AlbumReducer'

const reducer = combineReducers({
    CountReducer,
    AlbumReducer
});
const albums = [
    {
        album_name: '2015.09.15VOL.021',
        model_name: '夏茉GiGi',
        category: "sexy",
        img_urls: [
            '0.jpg',
            '001.jpg', '002.jpg', '003.jpg', '004.jpg',
            '005.jpg', '006.jpg', '007.jpg', '008.jpg',
            '009.jpg', '010.jpg', '011.jpg', '012.jpg',
            '013.jpg', '014.jpg', '015.jpg', '016.jpg',
            '017.jpg', '018.jpg', '019.jpg', '020.jpg',
            '021.jpg', '022.jpg', '023.jpg', '024.jpg',
            '025.jpg', '026.jpg', '027.jpg', '028.jpg',
            '029.jpg', '030.jpg', '031.jpg', '032.jpg',
            '033.jpg', '034.jpg', '035.jpg', '036.jpg',
            '037.jpg', '038.jpg', '039.jpg',

        ]
    },
    {
        album_name: '2015.08.30VOL.017',
        model_name: '夏茉GiGi',
        category: "sexy",
        img_urls: [
            '0.jpg',
            '001.jpg', '002.jpg', '003.jpg', '004.jpg',
            '005.jpg', '006.jpg', '007.jpg', '008.jpg',
            '009.jpg', '010.jpg', '011.jpg', '012.jpg',
            '013.jpg', '014.jpg', '015.jpg', '016.jpg',
            '017.jpg', '018.jpg', '019.jpg', '020.jpg',
            '021.jpg', '022.jpg', '023.jpg', '024.jpg',
            '025.jpg', '026.jpg', '027.jpg', '028.jpg',
            '029.jpg', '030.jpg', '031.jpg', '032.jpg',
            '033.jpg', '034.jpg', '035.jpg', '036.jpg',
            '037.jpg', '038.jpg', '039.jpg',

        ]
    },
    {
        album_name: 'GIGI_Album_2',
        model_name: '夏茉GiGi',
        category: "sexy",
        img_urls: [
            '0.jpg',
            '001.jpg', '002.jpg', '003.jpg', '004.jpg',
            '005.jpg', '006.jpg', '007.jpg', '008.jpg',
            '009.jpg', '010.jpg', '011.jpg', '012.jpg',
            '013.jpg', '014.jpg', '015.jpg', '016.jpg',
            '017.jpg', '018.jpg', '019.jpg', '020.jpg',
            '021.jpg', '022.jpg', '023.jpg', '024.jpg',
            '025.jpg', '026.jpg', '027.jpg', '028.jpg',
            '029.jpg', '030.jpg', '031.jpg', '032.jpg',
            '033.jpg', '034.jpg', '035.jpg', '036.jpg',
            '037.jpg', '038.jpg', '039.jpg',

        ]
    },
    {
        album_name: 'GIGI_Album_1',
        model_name: '夏茉GiGi',
        category: "sexy",
        img_urls: [
            '0.jpg',
            '001.jpg', '002.jpg', '003.jpg', '004.jpg',
            '005.jpg', '006.jpg', '007.jpg', '008.jpg',
            '009.jpg', '010.jpg', '011.jpg', '012.jpg',
            '013.jpg', '014.jpg', '015.jpg', '016.jpg',
            '017.jpg', '018.jpg', '019.jpg', '020.jpg',
            '021.jpg', '022.jpg', '023.jpg', '024.jpg',
            '025.jpg', '026.jpg', '027.jpg', '028.jpg',
            '029.jpg', '030.jpg', '031.jpg', '032.jpg',
            '033.jpg', '034.jpg', '035.jpg', '036.jpg',
            '037.jpg', '038.jpg', '039.jpg',

        ]
    },
    {
        album_name: 'sweet_sugar',
        model_name: 'Lery',
        category: "sweet",
        img_urls: [
            '0.jpg',
            '001.jpg', '002.jpg', '003.jpg', '004.jpg',
            '005.jpg', '006.jpg', '007.jpg', '008.jpg',
            '009.jpg', '010.jpg', '011.jpg', '012.jpg',
            '013.jpg', '014.jpg', '015.jpg', '016.jpg',
            '017.jpg', '018.jpg', '019.jpg', '020.jpg',
            '021.jpg', '022.jpg', '023.jpg', '024.jpg',
            '025.jpg', '026.jpg', '027.jpg', '028.jpg',
            '029.jpg', '030.jpg', '031.jpg', '032.jpg',
        ]
    },
];

const catalogues = [];
albums.map(album => {
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
        albums: albums,
        gallery: {},
        filteredAlbums: [],
        catalogues: catalogues,
    }

};

// console.log(initialState.AlbumReducer.catalogues);

let store = createStore(reducer, initialState);

export default store;
