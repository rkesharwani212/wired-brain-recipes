 import './App.css';
// import {store} from "./actions/store";
// import {Provider} from "react-redux";
import  {Container} from "@material-ui/core"
import AddBook from './components/AddBook';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
function App() {

  const token=localStorage.getItem('token')
  // useEffect(()=>{
  //   setToken({
  //     token:localStorage.getItem('token')
  //   })
  // },[token])

  return (
      <Container maxWidth="lg">
          <Navbar/>
            {token!==null?
              <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/add">
                <AddBook/>
              </Route>
              <Route path="/edit/:id">
                <AddBook/>
              </Route>
              </Switch>
              :<>
              <Switch>
                <Route exact path="/">
                  <Login/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/signup">
                  <Signup/>
                </Route>
              </Switch>
              </>}
      </Container>
    
  );
}

export default App;
