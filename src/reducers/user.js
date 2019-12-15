import { INIT_USER_REQUEST, INIT_USER_SUCCESS, INIT_USER_ERROR } from '../actions/user'

const initialState = {
    vk_id: "",
    carma: 0,
    newDealsCount: 0,
    isLoading: false,
    isError: false,
    friends: []
};

const user = (state = initialState , action) => {
    switch (action.type) {
        case INIT_USER_REQUEST:{
            console.log(action.payload)
            return {...state, vk_id: action.payload, isLoading: true}
        }
        case INIT_USER_SUCCESS:{
            console.log(action.payload.carma)
            return {...state, isLoading: false, carma: action.payload.score, /*newDealsCount: action.payload.newDealsCount, /*friends: action.payload.friends*/}
        }
        case INIT_USER_ERROR:{
            console.log(action.payload)
            return {...state, isLoading: false, isError: true}
        }
        default:
            return state;
    }
};

export default user