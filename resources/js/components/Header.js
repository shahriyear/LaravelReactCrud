import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Category from './category/Index';


export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>

                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            < div className = "container" >
                            <Link className="navbar-brand" to="/"> Laravel React </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About Us</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/category">Category</Link>
                                    </li>

                                </ul>
                            </div>
                            </div>
                        </nav>

                    </header>

                    < div className = "container" >
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/category' component={Category}/>

                    </div>

                </div>

            </Router>
        );
    }
}
