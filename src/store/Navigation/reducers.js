import AppNavigator from '../../AppRouteConfig';

const initialState = {
    type: 'Reset',
    index: 0,
    routes: [
        { key: 'Profile', routeName: 'Profile' },
    ],
};

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default navReducer;  