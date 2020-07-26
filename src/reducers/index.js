import { SET_FAVORITE, REMOVE_FAVORITE } from '../types';

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
        default:
            return state;
    }
}

export default reducer;
