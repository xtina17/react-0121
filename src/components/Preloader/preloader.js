import React from 'react';
import style from './preloader.module.css'
import {VscLoading} from "react-icons/vsc";

const Preloader = () => {

    return (
        <div className={style.preloader}>
            <VscLoading/>
        </div>
    );
};

export default Preloader;