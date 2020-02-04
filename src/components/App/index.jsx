import React, { useContext } from "react";
import { AuthContext } from "../../context/";
import { Route, Redirect } from "react-router-dom";

// => Components
import Home from "../Home";
import Navbar from "../layout/Navbar";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import MainWrapper from "../layout/MainWrapper";

function App() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Navbar />
            <MainWrapper>
                {!user ? (
                    <>
                        <Route exact component={SignUp} path="/signup" />
                        <Route exact component={SignIn} path="/login" />
                        <Redirect to="/login" />
                    </>
                ) : (
                    <>
                        <Route exact component={Home} path="/" />
                        <Redirect to="/" />
                    </>
                )}
            </MainWrapper>
        </>
    );
}

export default App;
