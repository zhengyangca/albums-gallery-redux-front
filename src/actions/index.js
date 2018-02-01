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


export const getAll = () => {
    return {
        type: 'get_all',
    }
}

export const search = (term) => {
    return {
        type: 'search',
        term: term,
    }
}

export const initGallery = (album2see) => {
    return {
        type: 'init_gallery',
        album2see: album2see,
    }
}
