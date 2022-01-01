import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { downCountAC,  upCountAC} from "../../../Redux/Actions/count.action";
import style from "./count.module.css";

const Count = () => {
    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()

    return (
        <div className={style.count}>
            {count}
            <button onClick={() => dispatch(upCountAC())}>Up</button>
            <button onClick={() => dispatch(downCountAC())}>Down</button>
        </div>
    );
};

export default Count;