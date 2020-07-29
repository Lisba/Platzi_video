import { SET_FAVORITE, REMOVE_FAVORITE, LOGIN_REQUEST } from '../types';

export const setFavorite = (payload) => {
    return {
        type: SET_FAVORITE,
        payload,
    }
};

export const removeFavorite = (payload) => {
    return {
        type: REMOVE_FAVORITE,
        payload,
    }
};

export const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload,
    }
}