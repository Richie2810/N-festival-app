import { combineReducers } from "redux";
import user from './user/reducer'
import location from './location/reducer'
import tracking from './tracking/reducer'

const rootReducer = combineReducers({
    user,
    location,
    tracking,
})

export default rootReducer;