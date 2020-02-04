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

const SignUp = () => {
    const { signUpUser, cleanUp_UI, state } = useContext(AuthContext);
    const { register, errors, handleSubmit, watch } = useForm();
    const password = React.useRef({});
    password.current = watch("password", "");

    const onSubmit = async values => signUpUser(values);

    useEffect(() => void cleanUp_UI(), []);

    return (
        <ContentWrapper>
            {!state.loading ? (
                <FormWrapper title="Sign up form.">
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
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must have at least 8 characters"
                                    }
                                })}
                            />

                            <small className={formStyle.form__section__error}>
                                {errors.password && errors.password.message}
                            </small>
                        </div>
                        <div className={formStyle.form__section}>
                            <label className={formStyle.form__section__title}>
                                Confirm Password
                            </label>
                            <input
                                className={formStyle.form__section__input}
                                name="password_repeat"
                                type="password"
                                ref={register({
                                    validate: value =>
                                        value === password.current ||
                                        "The passwords do not match"
                                })}
                            />
                            <small className={formStyle.form__section__error}>
                                {errors.password_repeat &&
                                    errors.password_repeat.message}
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
                            <Link to="/login">I have an account</Link>
                        </div>
                    )}
                </FormWrapper>
            ) : (
                <Loader />
            )}
        </ContentWrapper>
    );
};

export default SignUp;
