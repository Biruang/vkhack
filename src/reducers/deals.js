const DEALS_FETCH_REQUEST = 'DEALS_FETCH_REQUEST';
const DEALS_FETCH_SUCCESS = 'DEALS_FETCH_SUCCESS';
const DEALS_FETCH_ERROR = 'DEALS_FETCH_ERROR';

const initialState = {
    data:[],
    isLoading: false,
    isError: false
};

const deals = (state = initialState, actions) => {
    switch (actions.type) {
        case DEALS_FETCH_REQUEST:
            return {...state, isLoading: true};
        case DEALS_FETCH_SUCCESS:
            return {...state, isLoading: false, data: actions.payload};
        case DEALS_FETCH_ERROR:
            return {...state, isError: true};
        default:
            return state;
    }

};

export default deals