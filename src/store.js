import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'


import contactReducer from './modules/contact/reducers'
import userReducer from './modules/user/reducers'


const rootReducer = combineReducers({
    contact: contactReducer,
    user: userReducer
})





const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default store