export default function CountReducer(state = {}, action) {
    const count = state.count
    const wish_value = action.wish_value
    switch (action.type) {
        case 'increase':
            return {
                count: Number(count) + 1,
                wish_value: Number(count) + 1
            }
        case 'update':
            return {
                count: Number(wish_value),
            }
        default:
            return state
    }
}