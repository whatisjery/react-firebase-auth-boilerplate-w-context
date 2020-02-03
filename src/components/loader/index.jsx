import React from "react";
import loader from "../../assets/loader.svg";
import "./style.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <img className="loader" src={loader} alt="loader" />
            <span>Connecting ...</span>
        </div>
    );
};

export default Loader;
