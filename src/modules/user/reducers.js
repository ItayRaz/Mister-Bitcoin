
const INITIAL_STATE = {
    currUser: null,
}

export default function userReducer(state= INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_USER':
        return {
            ...state,
            currUser: action.user
        }
            
    
        default:
            return state;
    }
}
