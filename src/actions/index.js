//Action Creator
export const increaseTodo = () => {
    return {
        type: 'increase',
    }
}

export const updateTodo = (wish_value) => {
    return {
        type: 'update',
        wish_value: wish_value,
    }
}


export const search = (term) => {
    return {
        type: 'search',
        term: term,
    }
}

export const initGallery = (album2see) => {
    // console.log(album2see)
    return {
        type: 'initGallery',
        album2see: album2see,
    }
}

export const fetchAlbum = (server_albums) => {
    return {
        type: 'fetchAlbum',
        server_albums: server_albums,
    }
}