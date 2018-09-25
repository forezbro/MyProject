import {combineReducers} from 'redux';
import user from './user'
import deta from './deta'
const reducer=combineReducers({user,deta});
export default reducer;