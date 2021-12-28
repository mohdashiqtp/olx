import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import {AuthContext, Context} from './Context'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext';
import View from './Components/View/View';
function App() {
  const {setUser}=useContext(AuthContext);
  const {firebase}=useContext(Context)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  return (
    <div>
    <Post>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
        <Route path='/viewpost'>
          <ViewPost />
        </Route>
      </Router>
    </Post>
    </div>
  );
}

export default App;
