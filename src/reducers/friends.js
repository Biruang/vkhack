import {FRIENDS_FETCH_ERROR, FRIENDS_FETCH_SUCCESS, FRIENDS_FETCH_REQUEST} from "../actions/friends";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
};

const friends = (state = initialState, actions) => {
    switch (actions.type) {
        case FRIENDS_FETCH_REQUEST:
            return {...state, isLoading: true};
        case FRIENDS_FETCH_SUCCESS:
            return {...state, isLoading: false, data: actions.payload};
        case FRIENDS_FETCH_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state;
    }
};

export default friends