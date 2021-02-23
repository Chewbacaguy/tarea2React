import React from "react"
import Input from "../components/Input"
import Form from "../components/Form"
import { Button, Container, Table } from "reactstrap";
import Api from "../utils/Api";
import {connect} from "react-redux"
import {selectBook, deleteBooks} from "../store/actions"
import { Redirect } from "react-router-dom";

class MyFavoriteBooks extends React.Component{

    constructor(props) {
        super(props);
 
    }

    render(){
        return (
            <Container>
                  {(JSON.stringify(this.props.books))}
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        
        user: state.user.data,
        books: state.books.all,
    }
}

const mapDispatchToProps = {selectBook, deleteBooks}

export default connect(mapStateToProps, mapDispatchToProps)(MyFavoriteBooks);