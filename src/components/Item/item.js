import React from 'react';
import style from "./item.module.css"

const Item = ({children,onClick}) => {
    return (
        <div className={style.item} onClick={onClick}>
            {children}
        </div>
    );
};

export default Item;