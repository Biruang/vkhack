import { combineReducers } from 'redux'
import user from './user';
import deals from "./deals";


export default combineReducers({
    user,
    deals
})