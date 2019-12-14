import { combineReducers } from 'redux'
import user from './user';
import deals from "./deals";
import friends from "./friends";
import statistics from "./statistics";


export default combineReducers({
    user,
    deals,
    friends,
    statistics
})