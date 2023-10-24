import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";
import style from "../Common/FormsControls/FormsControls.module.css"

const maxLength20 = maxLengthCreator(20);
const minLength2 = minLengthCreator(3);

const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLength20, minLength2]} />
            </div>
            <div>
                <Field placeholder="Password" name={"password"} component={Input} validate={[required, maxLength20, minLength2]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[]} /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({ form: 'login' }) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login} ) (Login);