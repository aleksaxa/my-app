import React from "react";
import './login.modules.css';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";
import style from "../Common/FormsControls/FormsControls.module.css"

const maxLength20 = maxLengthCreator(20);
const minLength2 = minLengthCreator(3);

const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div className="InputEmailPsaaword">
                <Field placeholder="Электронная почта" name={"email"} component={Input} validate={[required, maxLength20, minLength2]} />
            </div>
            <div className="InputEmailPsaaword">
                <Field placeholder="Пароль" name={"password"} component={Input} validate={[required, maxLength20, minLength2]} />
            </div>
            <div className="CheckBox">
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[]} /> <span>Запомнить меня</span>
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div className="ButtonLogin">
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <div className="Login">
            <div className="Block_NameCompany">
                <h1>HollyBen</h1>
                <p>HollyBen помогает держать связь с родными и близкими.</p>
            </div>

            <div className="Block_Login">
                <h1>Авторизация</h1>
                <LoginReduxForm className="Forms_Login" onSubmit={onSubmit} />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);