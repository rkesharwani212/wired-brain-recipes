import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions/auth'

const Signup=()=>{

    const history=useHistory();

    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
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
        console.log(user)
        actions.signup(user)
        history.push("/login")
        
    }

    return (
        <div className="container">
            <div className="row">
                <h3 className="display-3 my-5 text-center">Signup</h3>
            </div>
            <div className="row">
                <div className="col-6 col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>First Name</label>
                                <input 
                                    type="text"
                                    class="form-control" 
                                    name="firstName" 
                                    placeholder="First Name"
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                     />
                            </div>
                            <div class="form-group col-md-6">
                                <label>Last Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    value={user.lastName}
                                     onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="email" 
                                placeholder="Email" 
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    name="password" 
                                    placeholder="Password" 
                                    value={user.password}
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <div class="form-group col-md-6">
                                <label>Confirm Password</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    name="confirmPassword" 
                                    placeholder="Confirm Password" 
                                    value={user.confirmPassword}
                                    onChange={handleInputChange}
                                    />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Signup"
                                className="btn btn-block btn-dark my-1"/>  
                        </div>
                    </form>
                    </div>
            </div>
        </div>
    );
}

export default Signup;