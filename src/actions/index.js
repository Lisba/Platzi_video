import { SET_FAVORITE, REMOVE_FAVORITE } from '../types';

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