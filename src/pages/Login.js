import React from "react"
import Input from "../components/Input"
import Form from "../components/Form"
import { InputGroup, InputGroupAddon, InputGroupText, Input as Input2} from 'reactstrap';
import { Button, Container, Table } from "reactstrap";
import Api from "../utils/Api";
import {connect} from "react-redux"
import { Link, withRouter } from "react-router-dom"
import {guardarUsuario} from "../store/actions"


class Login extends React.Component{
    constructor(props){

        super(props)

        this.state = {

            nombre: '',
            apellido: '',
            correo: '',
            fechaNac: '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleSubmit.bind(this);
        
    }

    saveValue = () =>{
       
        let obj = {nombre: this.state.nombre, apellido: this.state.apellido, correo: this.state.correo, fechaNac: this.state.fechaNac}     
        this.props.guardarUsuario(obj)
    }

    getValue = () => {
        let data = localStorage.getItem("user");
        data = JSON.parse(data);
        console.log(data)

    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event) {

        const { nombre, apellido, correo, fechaNac} = this.state
        event.preventDefault();

        alert( `
        Se han enviado sus datos con éxito\n 
        Nombre : ${nombre} 
        Apellido : ${apellido} 
        Correo : ${correo} 
        Fecha de Nacimiento : ${fechaNac}`
        ) 

    }

    handleClear(event) {
        this.myFormRef.reset();
    }


    render(){

        
        return(
            <form onSubmit={this.handleSubmit}> 

        <div className="inputs"> 
          <label htmlFor='nombre'>Nombre</label> 
          <input
            type = 'text'
            name='nombre'
            placeholder='nombre'
            
            value = {this.state.nombre} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div className="inputs"> 
          <label htmlFor='apellido'>Apellido</label> 
          <input 
            type = 'text'
            name='apellido' 
            
            placeholder='apellido'
            value={this.state.apellido} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div className="inputs"> 
          <label htmlFor='correo'>Correo</label> 
          <input 
            type = 'text' 
            name='correo' 
            
            placeholder='correo'
            value={this.state.correo} 
            onChange={this.handleChange} 
          /> 
        </div> 
        <div className="inputs"> 
          <label htmlFor='fechaNac'>Fecha de Nacimiento</label> 
          <input 
            type = 'text'
            name='fechaNac' 
            placeholder='fechaNac'
            value={this.state.fechaNac} 
            onChange={this.handleChange} 
          /> 
        </div> 

        <div> 
        <button 
            type="submit" 
            className="btn btn-primary btn-block"
            onClick = {() => {
                this.saveValue()
                this.props.history.push("/home")
                }}>Continue</button>
        </div> 


        <form onSubmit={this.handleClear}> 

        <div> 
          <button className = "btn btn-secondary btn-block"> Limpiar Datos</button> 
        </div> 


        </form> 
        </form>

        );

    }
}

const mapStateToProps = (state) => {
    return {
        usuario: state.bookState.usuario
    }
}

const mapDispatchToProps = {guardarUsuario}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));