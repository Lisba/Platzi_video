import { SET_FAVORITE, REMOVE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST } from '../types';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_FAVORITE:
            if(state.myList.find(element => element.id === action.payload.id)) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    myList: [...state.myList, action.payload],
                };
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload)
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
