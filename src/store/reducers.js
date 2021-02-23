import { combineReducers } from "redux"

import cities from "./cities/reducer"

import bookState from "./libros/reducer"


const rootReducer = combineReducers({
    cities,
    bookState
})

export default rootReducer