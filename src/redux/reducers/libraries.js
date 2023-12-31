const initialState = ['redux', 'react']

function libraries(state =initialState, action){
    // console.log('1', state)
    switch (action.type) {
        case "ADD_LIBRARY":
            return [
                ...state,
                action.payload
            ]
            break;

        case "DELETE_LIBRARY":
            return state
            break;

        default: return state
    }
    return state
}

export default libraries;