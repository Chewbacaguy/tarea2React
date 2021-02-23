import React from "react"
import BaseField from "./BaseField"
import {FormGroup, Label, Input as Input2} from 'reactstrap'; 


class Input extends BaseField{

    constructor(props) {
        super(props);

    }
 
    render(){

        return (
            <FormGroup {...this.props}>
                <label>{this.props.label}</label>
                <input type={this.props.fieldtype} value={this.state.value} onChange={(e)=>{this.setState({value: e.target.value})}}/>
            </FormGroup>
        )
    }

}

export default Input;