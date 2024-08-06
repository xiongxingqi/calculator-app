import React, { Component } from 'react';
import NavBar from './NavBar';
import { Route ,Routes } from 'react-router-dom';
import Home from './contents/Home';
import About from './contents/About';
import Calculator from './contents/Calculator';
import Login from './contents/Login';
import Register from './contents/Register';
import NoFound from './contents/NoFound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <div className='container'>
                    <Routes>
                        <Route path='/'  element={<Home/>} ></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/Calculator' element={<Calculator/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/register' element={<Register/>}></Route>
                        <Route path='/*'  element={<NoFound/>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;