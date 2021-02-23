import {
    SELECT_BOOK,
    BUSCAR_BOOK,
    DELETE_BOOKS, 
    GUARDAR_BOOK,
    GUARDAR_USUARIO
   } from "./actionType"
   
   export const selectBook = (book) => {
       localStorage.setItem("book", JSON.stringify(book))
       return {
           type: SELECT_BOOK,
           payload: book
       }
   }
   
   export const deleteBooks = () => {
    let arg = ("[]")
    localStorage.setItem("books", arg)
       return {
           type: DELETE_BOOKS
       }
   }

   //con el item ISBN
   export const buscarLibro = (book) => {
    localStorage.getItem("book", JSON.parse(book))
    return{
        type: BUSCAR_BOOK,
        payload: book
    }

   }

   export const saveBooks = (lstbooks) =>{
    console.log(lstbooks)
    localStorage.setItem("books", JSON.stringify(lstbooks))
    return {
        type: GUARDAR_BOOK,
        payload: lstbooks

        }

    }

    export const guardarUsuario = (usuario) =>{
        console.log(usuario)
        localStorage.setItem("usuario", JSON.stringify(usuario))
        return {
            type: GUARDAR_USUARIO,
            payload: usuario
    
        }

   }