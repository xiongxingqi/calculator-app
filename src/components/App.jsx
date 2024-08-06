import React, { Component } from 'react';
import NavBar from './NavBar';
import { Route ,Routes } from 'react-router-dom';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <div className='container'>
                    <Routes>
                        <Route path='/'  ></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;