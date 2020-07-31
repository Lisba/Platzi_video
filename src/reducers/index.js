import { SET_FAVORITE, REMOVE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, GET_VIDEO_SOURCE } from '../types';

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
        case REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload
            };
        case GET_VIDEO_SOURCE:
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                || state.originals.find(item => item.id === Number(action.payload))
                || []
            };
        default:
            return state;
    }
}

export default reducer;
