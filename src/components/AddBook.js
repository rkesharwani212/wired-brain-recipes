import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import * as actions from "../actions/book"

const AddBook=(props)=>{

    const {id}=useParams();
    const currentBook=props.bookList.find(x=>x.id===parseInt(id));

    useEffect(()=>{
        if(currentBook){
            console.log(id);
            setValues({
                ...currentBook
            })
        }
    },[currentBook])


    const history=useHistory();
    const [values,setValues]=useState({
        title:"",
        description:""
    })
    const handleInputChange=e=>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    

    const handleSubmit=e=>{
        e.preventDefault();

        if(!values.title || !values.description){
            return window.alert('Please fill in all feilds!')
        }


        if(id===undefined){
            props.createBook(values,()=>{window.alert('add successfully')})
        }else{
            props.updateBook(id,values,()=>{window.alert('updated successfully')})
        }
        history.push("/")
        
    }

    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">
                Add Book
            </h1>
            <div className="row">
                
            <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-1 ">
                      <input 
                        type="text" 
                        placeholder="Title"
                        className="form-control"
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                        />  
                    </div>
                    <div className="form-group ">
                      <textarea 
                        placeholder="Description"
                        className="form-control"
                        name="description" 
                        value={values.description}
                        onChange={handleInputChange}
                        />  
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Submit"
                        className="btn btn-block btn-dark my-1"/> 
                       <Link to="/" className="btn btn-danger ms-1">Cancel</Link>
                    </div>
                    
                </form>
            </div>
            </div>
        </div>
    );
}

const mapStateToProps=state=>({
    bookList:state.book.list
})

const mapActionToProps={
    createBook:actions.create,
    updateBook:actions.update
}

export default connect(mapStateToProps,mapActionToProps) (AddBook);