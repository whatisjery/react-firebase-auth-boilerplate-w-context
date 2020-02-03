import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/";
import logo from "../../assets/logo.svg";
import "./style.css";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav className="navbar">
            <div>
                <img className="navbar__logo" src={logo} alt="" />
            </div>
            <div>
                {user ? (
                    <NavLink
                        activeClassName="active"
                        className="navbar__link"
                        to="/"
                    >
                        Welcome {user.email}.
                    </NavLink>
                ) : (
                    <>
                        <NavLink
                            activeClassName="active"
                            className="navbar__link"
                            to="/login"
                        >
                            sign in
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="navbar__link"
                            to="/signup"
                        >
                            sign up
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
