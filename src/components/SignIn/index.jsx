import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loader from "../../assets/loader.svg";

// => Context
import { AuthContext } from "../../context";

// => Components
import ContentWrapper from "../layout/ContentWrapper";
import FormWrapper from "../layout/FormWrapper";

// => Styles
import styles from "../../css-module/form.module.css";

const Login = () => {
    const { signInUser, state } = useContext(AuthContext);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = async values => signInUser(values);

    return (
        <ContentWrapper>
            {!state.loading ? (
                <FormWrapper title="🚀sign in">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.form}
                    >
                        <div className={styles.form__section}>
                            <label className={styles.form__section__title}>
                                Email
                            </label>
                            <input
                                className={styles.form__section__input}
                                name="email"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                            />
                            <small className={styles.form__section__error}>
                                {errors.email && errors.email.message}
                            </small>
                        </div>
                        <div className={styles.form__section}>
                            <label className={styles.form__section__title}>
                                Password
                            </label>
                            <input
                                className={styles.form__section__input}
                                name="password"
                                type="password"
                                ref={register({
                                    required: "Required",
                                    min: 6,
                                    max: 30
                                })}
                            />
                            <small className={styles.form__section__error}>
                                {errors.password && errors.password.message}
                            </small>
                        </div>
                        <div className={styles.form__submit}>
                            <input
                                className={styles.form__submit__btn}
                                type="submit"
                                value="validate"
                            />
                        </div>
                    </form>

                    <div className={styles.form__helper}>
                        <Link to="/signup">Create an account</Link>
                    </div>
                </FormWrapper>
            ) : (
                <div className="loader-container">
                    <img className="loader" src={loader} alt="loader" />
                    <span>Connecting ...</span>
                </div>
            )}
        </ContentWrapper>
    );
};

export default Login;
