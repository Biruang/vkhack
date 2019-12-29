import {FRIENDS_FETCH_ERROR, FRIENDS_FETCH_SUCCESS, FRIENDS_FETCH_REQUEST} from "../actions/friends";

const initialState = {
    data: [
        {
            "id": 26988152,
            "carma": 24,
            "newDealsCount": 2,
            "first_name":"Vas",
            "last_name":"Das",
            "photo":"https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1",
            "friends": [230353142, 230353234]
        },
        {
            "id": 230353142,
            "carma": 13,
            "newDealsCount": 3,
            "first_name":"Vam",
            "last_name":"Dam",
            "photo":"https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1",
            "friends": [230353165]
        },
        {
            "id": 230353234,
            "carma": 13,
            "newDealsCount": 3,
            "first_name":"Vam",
            "last_name":"Dam",
            "photo":"https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1",
            "friends": [230353165]
        }
    ],
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