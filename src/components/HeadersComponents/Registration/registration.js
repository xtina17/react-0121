import React, {useState} from 'react';
import style  from './registration.module.css'
import AuthForm from "../../AutForm/authForm";
import Input from "../../Global/Input/input";
import Button from "../../Global/button/button";
import {useHistory, useLocation} from "react-router-dom"
//checked

const Registration = () => {
    const history = useHistory();//for->location

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changeUserName = (e) => {
        setUsername(e.target.value); //for value    e = event;
                                    //target = element where this event came from;
                                    //value ->we know :)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const registration = (e) => {
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify({ //setItem -> for add and update
            userName,
            email,
            password,
            confirmPassword
        }))
        history.push('/login')
    }


    return (
        <div className={style.registration}>
           <AuthForm>
               <form onSubmit={registration}>
                  <Input type="text"
                         cn="registerInput"
                         placeholder="Username"
                         value={userName}
                         onChange={changeUserName}
                  />
                  <Input type="text"
                         cn="registerInput"
                         placeholder="Email"
                         value={email}
                         onChange={changeEmail}
                  />
                  <Input type="password"
                         cn="registerInput"
                         placeholder="Password"
                         value={password}
                         onChange={changePassword}
                  />
                  <Input type="password"
                         cn="registerInput"
                         placeholder="ConfirmPassword"
                         value={confirmPassword}
                         onChange={changeConfirmPassword}
                  />
                   <Button cn="registrationButton">
                       Sing Up!
                   </Button>
               </form>
           </AuthForm>
        </div>
    );
};

export default Registration;