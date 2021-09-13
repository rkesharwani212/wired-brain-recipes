import axios from 'axios';
import { useHistory } from 'react-router-dom';


const baseUrl="https://localhost:44388/api/account"

export const login=(data)=>{
    return axios.post(baseUrl+'/login',data)
    .then(res=>{
        console.log(res.data)
        const token=res.data
        localStorage.setItem('token',token);
        window.location.reload(false);
    })
    .catch(err=>console.log(err));
    
}

export const signup=(data)=>{
    return axios.post(baseUrl+'/signup',data)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>console.log(err))
} 