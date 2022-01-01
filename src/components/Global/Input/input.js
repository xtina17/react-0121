import React from 'react';
import style from './input.module.css'
//checked

const Input = ({cn, type, value, placeholder, onChange}) => {
    return (
        <label>
            <input className={style[cn]}
                   type={type}
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange}
            />
        </label>
    );
};

export default Input;