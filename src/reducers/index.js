import { combineReducers } from 'redux'
import user from './user';
import deals from "./deals";
import friends from "./friends";


export default combineReducers({
    user,
    deals,
    friends
})