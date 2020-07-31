import { SET_FAVORITE, REMOVE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, GET_VIDEO_SOURCE } from '../types';

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

export const logoutRequest = (payload) => {
    return {
        type: LOGOUT_REQUEST,
        payload,
    }
}

export const registerRequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload,
    }
}

export const getVideoSource = (payload) => {
    return {
        type: GET_VIDEO_SOURCE,
        payload,
    }
}