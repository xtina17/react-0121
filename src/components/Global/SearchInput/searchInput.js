import React from 'react';
import style from './searchInput.module.css'

const SearchInput = ({cn, type, value, placeholder}) => {
    return (
            <label>
                <input className={style[cn]}
                       type={type}
                       value={value}
                       placeholder={placeholder}
                />
            </label>
    );
};

export default SearchInput;