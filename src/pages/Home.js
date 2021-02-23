import React from "react"
import Input from "../components/Input"
import Form from "../components/Form"
import { Button, Container, Table } from "reactstrap";
import Api from "../utils/Api";
import {connect} from "react-redux"
import {saveBooks, deleteBooks } from "../store/actions"
import { Route, withRouter } from "react-router-dom"
import { Redirect } from "react-router-dom";


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            book: {}
            

        }
        this.input1 = React.createRef()
    }

    displayValue = () =>{
        console.log(this.user.current.getValue())
    }

    saveValue = () =>{
        localStorage.setItem("input1", this.input1.current.getValue())
    }

    searchBook = () => {
        Api.GET(this.input1.current.getValue() + ".json",
        (response) => {
            console.log()
            this.setState({book: response})
        }
        )
    }
    refreshPage() {
        window.location.reload();
      }

    addBook = () => {
        console.log("Adding book...")
        let lstBooks = JSON.parse(JSON.stringify(this.props.books))
        lstBooks.push(this.state.book)
        console.log(lstBooks)
        this.props.saveBooks(lstBooks)
        this.refreshPage()
    }

    deleteBooks = () => {
        this.props.deleteBooks();
        this.refreshPage()
    }
    cerrarSesion = () => {
        this.props.deleteBooks();
        this.props.history.push("/Login")
        this.refreshPage()
    }


    render(){

        // if(!this.current.usuario){
        //     console.log(usuario)
        //     return <Redirect to="/login"/>
        // }
        
        console.log(this.props)
        return (
            <Container>
                <div>
                    <p> Nombre del usuario: {JSON.parse(localStorage.getItem("usuario")).nombre} {JSON.parse(localStorage.getItem("usuario")).apellido}</p>
                    <p> Correo: {JSON.parse(localStorage.getItem("usuario")).correo} / Fecha Nacimiento: {JSON.parse(localStorage.getItem("usuario")).fechaNac} </p>
                    
                </div>
                <Form>
                    <Input 
                        ref={this.input1} 
                        label={"Ingresa codigo ISBN"} 
                        placeholder = {"Escribe codigo libro"}
                        > Buscar Libro </Input>

                    <Button
                    onClick= {() => {
                        this.searchBook();
                    }}>
                    Buscar
                    </Button>
           
                </Form>

                <h2> {this.state.book.title}</h2>
                    {/* {JSON.stringify(this.props.libros)} */}
                    <Button
                        style={{float:"right"}}
                        color={"danger"} 
                        onClick={()=>{
                            this.addBook()
                            
                            
                        }}>
                        Agregar a Favoritos
                    </Button>

                    <Button
                        style={{float:"right"}}
                        color={"success"} 
                        onClick={()=>{
                            this.cerrarSesion()
                            
                        }}>
                        Cerrar sesion 
                    </Button>

            <Table>     
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Libros Favoritos</th>
                        </tr>
                    </thead>
                    <tbody>
                         
                        {this.props.books && this.props.books.map((item, index)=> 
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.title}</td>
                                <td>{item.name}</td>
                            </tr>)}
                    </tbody>
                    
                   
            </Table>
            <div> 
                <Button
                    style={{float:"right"}}
                    color={"danger"} 
                    onClick={()=>{
                    this.deleteBooks();
                    }}>
                        Borrar Libros 
                </Button>
            </div>
            
        
                    </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        books: state.bookState.books,
        usuario: state.bookState.usuario
    }
}

const mapDispatchToProps = {saveBooks, deleteBooks}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));