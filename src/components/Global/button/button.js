import React from 'react';
import style from './button.module.css';
//checked

const Button = ({children, cn, onClick}) => {
    return (
        <button onClick={onClick} className={style[cn]}>
            {children}
        </button>

    );
};

export default Button;