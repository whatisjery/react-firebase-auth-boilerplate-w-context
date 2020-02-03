import React, { useEffect, useState, createContext, useReducer } from "react";
import * as type from "./authType";
import app from "../config/firebase";

// Reducer
import { reducer, initalState } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => app.auth().onAuthStateChanged(setUser), []);

    const handleLogin = async data => {
        try {
            dispatch({ type: type.AUTH_TRY });
            await app
                .auth()
                .signInWithEmailAndPassword(data.email, data.password);
            dispatch({ type: type.AUTH_SUCCESS });
        } catch (error) {
            console.log(error);
            dispatch({ type: type.AUTH_ERROR });
        }
    };

    const handleSignUp = async data => {
        try {
            dispatch({ type: type.AUTH_TRY });
            await app
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password);
            dispatch({ type: type.AUTH_SUCCESS });
        } catch (error) {
            console.error(error);
            dispatch({ type: type.AUTH_ERROR });
        }
    };

    const logout = async () => {
        try {
            await app.auth().signOut();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, handleLogin, handleSignUp, logout, state }}
        >
            {children}
        </AuthContext.Provider>
    );
};
