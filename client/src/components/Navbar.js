import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../images/logo2.png";
import { UserContext } from "../App";


const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);
    console.log(`the navbar user ${state} and ${dispatch}`);

    const RenderList = () => {

        if (state) {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/aboutus">AboutUs</NavLink>
                    </li>
                    <li class="nav-item active dropdown">
                        <a class="nav-link dropdown-toggle active-page " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class=" dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/calory">BMI Calculator  </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/exersise">Exersise </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/training">Training <span class="badge bg-warning">Premium</span> </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/diet">Diet </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/about">Weekly Report </NavLink></li>       
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page active " className="nav-link" to="/about">AboutMe</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </>

            )
        } else {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/">Home </NavLink>
                    </li>
                    
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/aboutus">Aboutus  
                        </NavLink>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class=" dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/calory">BMI Calculator  </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/exersise">Exersise </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/training">Training <span class="badge bg-warning">Premium</span> </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/services/diet">Diet </NavLink></li>
                            <li><NavLink exact activeClassName="active-page" className="dropdown-item drop" to="/about">Weekly Report </NavLink></li>

                            
                           
                        </ul>
                    </li>

                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    {/* <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link " to="/admin">Admin</NavLink>
                    </li> */}
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/login">Login</NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page active" className="nav-link" to="/signup">Signup</NavLink>
                    </li>

                   


                </>
            )
        }
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <RenderList />


                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
