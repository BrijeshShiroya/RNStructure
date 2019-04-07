import {
    login_request,
    login_success,
    login_fail
} from './actionTypes';

const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case login_request:
            return {
                ...state,
                loading: true
            }
        case login_success:
            return {
                ...state,
                loading: false
            }
        case login_fail:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}