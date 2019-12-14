import { FETCH_STATISTICS_REQUEST, FETCH_STATISTICS_SUCCESS, FETCH_STATISTICS_ERROR } from '../actions/statistics'

const initialState = {
    data: {
        day_allPoints: 0,
        day_positive: 0,
        week_allPoints: 0,
        week_positive: 0,
        month_allPoints: 0,
        month_positive: 0,
        year_allPoint: 0,
        year_positive: 0,
        history: [],
    },
    isLoading: false,
    isError: false
};

const statistics = (state = initialState, actions) => {
    switch (actions.type){
        case FETCH_STATISTICS_REQUEST:
            return {...state, isLoading: true};
        case FETCH_STATISTICS_SUCCESS:
            return {...state, data: actions.payload, isLoading: false};
        case FETCH_STATISTICS_ERROR:
            return {...state, isLoading: false, isError: true };
        default:
            return state;
    }

};

export default statistics