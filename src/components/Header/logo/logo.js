import React from "react";
import style from "../header.module.css";
import logo from "../img/apple-xxl.png";

const Logo = () => {
    return (
        <div className={style.img}>
            <img src={logo}  alt="logo"/>
        </div>
    )
}
export default Logo;