const initialState = ['angular']

function frameworks(state =initialState, action){
    // console.log('1', state)
    switch (action.type) {
        case "ADD_FRAMEWORKS":
            return [
                ...state,
                action.payload
            ]

            break;

        case "DELETE_FRAMEWORK":
            return state
            break;
        default: return state
    }
    return state
}

export default frameworks;