import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import * as actions from '../actions/auth'
const Login=()=>{

    const history=useHistory();

    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const handleInputChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    

    const handleSubmit=e=>{
        e.preventDefault();
        if(!user.email || !user.password){
            return window.alert("Please fill in all feilds!")
        }
        console.log(user)
        actions.login(user)
        history.push("/")
        
    }
    return (
        <div className="container">
            <div className="row">
                <h3 className="display-3 my-5 text-center">Login</h3>
            </div>
            <div className="row">
                <div className="col-4">
                    
                </div>
                <div className="col-4">
                    <h5> Not have account then</h5>
                </div>
                <div className="col-4">
                    <Link to="/signup" className="btn btn-primary">Signup</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            placeholder="Email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                placeholder="Password"
                                className="form-control"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                        <input type="submit" value="Login"
                            className="btn btn-block btn-dark my-1"/>  
                        </div>
                        
                    </form>
                    </div>
            </div>
        </div>
    );
}

export default Login;