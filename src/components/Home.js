import React, { useEffect } from "react"
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import * as actions from "../actions/book"

const Home=(props)=>{


    useEffect(()=>{
        props.fetchAllBooks()
    },[])

    const onDelete = id=>{
        props.deleteBook(id,()=>{window.alert("deleted")})
    }

    return (
        <div className="container">
            <h1 className="mb-4">All Books</h1>
            <Link to="/add" className="btn btn-success">Add New Book</Link>
            
                    {props.bookList.map((record,index)=>{
                        return (
                            <div key={index}>
                                <div className="card mt-4">
                                    <div className="card-body">
                                    <h4 className="card-title">{record.title}</h4>
                                    <div className="card-text mb-2">{record.description}</div>
                                    <div className="d-grid gap-2 d-md-flex ">
                                        <Link to={`/edit/${record.id}`}  className="btn btn-info" >Edit</Link>
                                        <button type="submit" className="btn btn-danger"
                                        onClick={()=>onDelete(record.id) }>Delete</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                    
                    </div>
                
                
    );
}

const mapStateToProps=state=>({
    bookList:state.book.list
})

const mapActionToProps={
    fetchAllBooks:actions.fetchAll,
    deleteBook:actions.Delete
}

export default connect(mapStateToProps,mapActionToProps) (Home);