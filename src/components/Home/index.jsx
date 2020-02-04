import React, { useContext } from "react";
import { AuthContext } from "../../context/";
import "./style.css";

// => Components

// => styles
import btnStyles from "../../css-module/btn.module.css";

const Home = () => {
    const { signOutUser, user } = useContext(AuthContext);

    return (
        <div className="home">
            <div className="home__title">
                <h1>Connection successful</h1>
            </div>
            <div className="home__info">
                <p>
                    user email : <span> {user.email}</span>
                </p>
            </div>
            <div className="home__info">
                <p>
                    user id : <span> {user.uid}</span>
                </p>
            </div>
            <div className="home__btn">
                <button className={btnStyles.btn} onClick={signOutUser}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
