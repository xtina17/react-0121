import React from "react";
import style from "./authForm.module.css";
//checked

const AuthForm = ({children}) => {
        return (
            <div className={style.authForm}>
                {children}
            </div>
        )
}
export default AuthForm;