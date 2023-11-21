import { combineReducers } from 'redux'
import commitsReducer from './commitsReducer'
import appReducer from './appReducer'


const mainReducer = combineReducers({
    commitsReducer,
    appReducer
    
})
export default mainReducer