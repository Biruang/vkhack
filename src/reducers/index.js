import { combineReducers } from 'redux'
import user from './user';
import deals from "./deals";
import friends from "./friends";
import statistics from "./statistics";


export const rootReducer = combineReducers({
    user: user,
    deals: deals,
    friends: friends,
    statistics: statistics
});