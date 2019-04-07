import {
    login_request,
    login_success,
    login_fail
} from './actionTypes';

const loginRequest = (dispatch) => {
    dispatch({
        type: login_request,
    });
};

export const login = (email) => {
    return (dispatch) => {
        dispatchToReducer(dispatch, login_request)
    }
}

dispatchToReducer = (dispatch, actionType, data) => {
    dispatch({
        type: actionType,
        payload: data
    });
}