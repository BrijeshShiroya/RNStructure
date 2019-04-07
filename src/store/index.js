import { combineReducers } from 'redux';
import authReducer from './Auth/reducers';
import navReducer from './Navigation/reducers';

export default rootReducer = combineReducers({
    nav: navReducer,
    auth: authReducer,
})