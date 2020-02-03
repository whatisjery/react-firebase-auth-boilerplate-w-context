import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// => Context
import { AuthContext } from "../../context";

// => Components
import ContentWrapper from "../layout/ContentWrapper";
import FormWrapper from "../layout/FormWrapper";
import Loader from "../loader";

// => styles
import formStyle from "../../css-module/form.module.css";
import btnStyle from "../../css-module/btn.module.css";

const Login = () => {
    const { signInUser, cleanUp_UI, state } = useContext(AuthContext);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = async values => signInUser(values);

    useEffect(() => void cleanUp_UI(), []);

    return (
        <ContentWrapper>
            {!state.loading ? (
                <FormWrapper title="🚀sign in">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={formStyle.form}
                    >
                        <div className={formStyle.form__section}>
                            <label className={formStyle.form__section__title}>
                                Email
                            </label>
                            <input
                                className={formStyle.form__section__input}
                                name="email"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                            />
                            <small className={formStyle.form__section__error}>
                                {errors.email && errors.email.message}
                            </small>
                        </div>
                        <div className={formStyle.form__section}>
                            <label className={formStyle.form__section__title}>
                                Password
                            </label>
                            <input
                                className={formStyle.form__section__input}
                                name="password"
                                type="password"
                                ref={register({
                                    required: "Required",
                                    min: 6,
                                    max: 30
                                })}
                            />
                            <small className={formStyle.form__section__error}>
                                {errors.password && errors.password.message}
                            </small>
                        </div>

                        <div className={formStyle.form__submit}>
                            <input
                                className={btnStyle.btn}
                                type="submit"
                                value="validate"
                            />
                        </div>
                    </form>

                    {state.errorMsg !== null ? (
                        <small className={formStyle.form__section__error}>
                            {state.errorMsg}
                        </small>
                    ) : (
                        <div className={formStyle.form__helper}>
                            <Link to="/signup">Create an account</Link>
                        </div>
                    )}
                </FormWrapper>
            ) : (
                <Loader />
            )}
        </ContentWrapper>
    );
};

export default Login;
