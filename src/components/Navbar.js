import React  from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar=()=>{
    const history=useHistory();
    const handleClick=()=>{
        localStorage.removeItem('token');
        window.location.reload(false);
        history.push('/login');
    }
    const token=localStorage.getItem('token');
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand ml-5">React Redux Contact App</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active">Login</Link>
                </li>
                <li>
                {token!==null?<Link  className="nav-link active"
                onClick={handleClick}>Logout</Link>:<div></div>}
                </li>
            </ul>
            
        </nav>
    );
}

export default Navbar;