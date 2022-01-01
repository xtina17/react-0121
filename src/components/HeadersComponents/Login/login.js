import React, {useState} from 'react'
import AuthForm from "../../AutForm/authForm";
import css from "./login.module.css"
import Input from "../../Global/Input/input";
import Button from "../../Global/button/button";
import {useHistory} from "react-router-dom";
import {HOME_PAGE} from "../../../UtilsURL/urla";
//checked

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const login = (e) =>{
        e.preventDefault()


        let emailLocal = JSON.parse(localStorage.getItem('user'))['email']
        let passwordLocal = JSON.parse(localStorage.getItem('user'))['password']

        console.log(emailLocal, passwordLocal)
        console.log(email, password)

        if( emailLocal === email && passwordLocal === password) {
            localStorage.setItem('token', "123454");
            //there is our token
            // if there is token, send by link
        }

        if (localStorage.getItem('token')) {
            history.push(HOME_PAGE);
            window.location.reload();
        }
    }

    return <div className={css.login}>
        <AuthForm>
            <form  onSubmit={login}>
                <Input
                    cn="loginInput"
                    type="text"
                    value={email}
                    placeholder="email"
                    onChange={changeEmail}/>
                <Input
                    cn="loginInput"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={changePassword}
                />
                <Button cn="loginButton">
                    Login
                </Button>
            </form>
        </AuthForm>
    </div>
}

export default Login

