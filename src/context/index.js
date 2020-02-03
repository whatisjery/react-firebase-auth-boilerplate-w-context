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

    const signInUser = async data => {
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

    const signUpUser = async data => {
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

    const signOutUser = async () => {
        try {
            await app.auth().signOut();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, signInUser, signUpUser, signOutUser, state }}
        >
            {children}
        </AuthContext.Provider>
    );
};
