import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'
import AlbumReducer from './reducers/AlbumReducer'

const reducer = combineReducers({
    CountReducer,
    AlbumReducer
});

const initialState = {
    CountReducer: {count: 123, wish_value: 12},
    AlbumReducer: {
        albums: [
            {
                album_name: 'haha',
                model_name: 'Sugar',
                category: "comedy",
                img_urls: [
                    'http://www.addictionresearchchair.ca/wp-content/uploads/2012/12/team.jpg',
                    'http://www.cogenteservices.com/uploads/4/2/2/6/42263143/2780368_orig.png',
                    'http://mmarellano.com/wp-content/uploads/2016/04/TEAM-844x490.png',
                    'https://thumbs.dreamstime.com/z/3d-small-people-team-23071405.jpg'
                ]
            },
            {
                album_name: 'heihei',
                model_name: 'Yuchan',
                category: 'sex',
                img_urls: [
                    'http://www.addictionresearchchair.ca/wp-content/uploads/2012/12/team.jpg',
                    'http://www.cogenteservices.com/uploads/4/2/2/6/42263143/2780368_orig.png',
                    'http://mmarellano.com/wp-content/uploads/2016/04/TEAM-844x490.png',
                    'https://thumbs.dreamstime.com/z/3d-small-people-team-23071405.jpg'
                ]
            }
        ],
        filteredAlbums: []
    }

};


let store = createStore(reducer, initialState);

export default store;
