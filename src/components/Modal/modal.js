import React, {useState} from "react";
import style from "./modal.module.css";
import {ImCancelCircle} from "react-icons/im";
import {render} from "react-dom";
import {usePercent} from "../Providers/percentProvider";
//checked

const Modal = () => {
    const {percent} = usePercent();
    const [showPercent ,setShowPercent] = useState(false);

    const show = (id) => {
    setShowPercent({[id]: !showPercent[id]});
   //      setShowPercent(prevState  => ({
   //          ...prevState,
   //          [id]: !showPercent[id]
   //      }))
    }

    return (
        <div className={style.main}>
            <ul>
                {
                    percent.map(s => {
                        return (
                            <li key={s.id} onClick={() => show(s.id)}>
                                <span> {s.percent}</span>
                            </li>
                        )
                    })
                }
            </ul>
                {
                    percent.map(x => {
                        return showPercent[x.id] && (
                            <div className={style.modalBg} onClick={show} style={{display: showPercent &&  "flex" }}>
                                <h1 className={style.modulsH1}> All About us</h1>
                                <div onClick={e => e.stopPropagation()} className={style.modal} style={{display: showPercent &&  "flex"}}>
                                    <div className={style.iconCancel}>
                                        <ImCancelCircle className={style.icon} onClick={show} />
                                    </div>
                                    <div  className={style.mainsDiv}>
                                        <div className={style.infos}>
                                            <p style={{padding: "10px"}}> Percent : {x.percent}</p>
                                            <p style={{padding: "10px"}}> Internship : {x.internship}</p>
                                            <p style={{padding: "10px"}}> Review : {x.review}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                         )
                    })
                }

        </div>
    );
};
export default Modal;