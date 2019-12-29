import { FETCH_STATISTICS_REQUEST, FETCH_STATISTICS_SUCCESS, FETCH_STATISTICS_ERROR } from '../actions/statistics'

const initialState = {
    data: {
        day_allPoints: 2,
        day_positive: 1,
        week_allPoints: 15,
        week_positive: 7,
        month_allPoints: 29,
        month_positive: 20,
        year_allPoint: 230,
        year_positive: 195,
        history: [
            {
                "id": 1,
                "name":"Покушал яблочко",
                "date":new Date('2019-12-14'),
                "type": "good",
                "karma": 10
            },
            {
                "id": 2,
                "name":"ВЫгулял собаку опять",
                "date":new Date(2019-12-16),
                "type": "good",
                "karma": 9
            },
            {
                "id": 3,
                "name":"Пнул кота",
                "date":new Date(2019-12-3) ,
                "type": "bad",
                "karma": -54
            },
            {
                "id": 4,
                "name":"Курил",
                "date":new Date(2019-10-3) ,
                "type": "bad",
                "karma": -7
            },
            {
                "id": 5,
                "name":"ВЫгулял собаку",
                "date":new Date(2018-12-16),
                "type": "good",
                "karma": 9
            },
            {
                "id": 6,
                "name":"Поругался с продавщицей",
                "date":new Date(2019-7-4) ,
                "type": "bad",
                "karma": -54
            },
            {
                "id": 7,
                "name":"Бухал",
                "date":new Date(2019-11-3) ,
                "type": "bad",
                "karma": -7
            },
        ],
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