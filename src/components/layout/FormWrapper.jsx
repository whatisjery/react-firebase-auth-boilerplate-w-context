import React from "react";

const FormWrapper = ({ title, children }) => {
    return (
        <div className="form-wrapper">
            <div className="form-wrapper__title">{title}</div>
            {children[0]}
            {children[1]}
        </div>
    );
};

export default FormWrapper;
