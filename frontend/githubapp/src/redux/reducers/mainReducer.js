import { combineReducers } from 'redux'
import commitsReducer from './commitsReducer'


const mainReducer = combineReducers({
    commitsReducer,
    
})
export default mainReducer