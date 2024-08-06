import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="nav-link active" to="/">Celest's calculator</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" to="/">首页</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/calculator">计算器</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" to="/login">登录</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">|</span>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/register">注册</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                {/* <div style={{width: "200px",height: "200px",backgroundColor: "red"}}>
                </div> */}
            </div>
    
        );
    }
}
 
export default NavBar;