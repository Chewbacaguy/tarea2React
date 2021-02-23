import {
    SELECT_BOOK,
    DELETE_BOOKS,
    GUARDAR_BOOK,
    GUARDAR_USUARIO
   } from "./actionType"

const INIT_STATE = {
    books: JSON.parse(localStorage.getItem("books")) || [],
    usuario: JSON.parse(localStorage.getItem("usuario")) || {}

}

const bookState = (state = INIT_STATE, action) => {
    switch(action.type){
        case SELECT_BOOK:
            return {
                ...state,
                book: action.payload
            }
        case DELETE_BOOKS:
            return {
                ...state,
                book: []
            }
    

        case GUARDAR_BOOK:
            return {
                ...state,
                books: action.paylaod
            }

        case GUARDAR_USUARIO:
            return{
                ...state,
                usuario: action.paylaod
            }

        

        default:
            return state
    }

}

export default bookState