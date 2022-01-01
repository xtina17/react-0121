import React, {useContext, useEffect, useState} from 'react';
import style from './contacts.module.css'
import {objectBContext} from "../../State/state";
//checked

const Contacts = () => {

    const b = useContext(objectBContext);
    console.log(b);

    const [dropdown, setDropdown] = useState(false);

    const [count, setCount] = useState(1);
    const [color, setColor] = useState('green');

    const [borderRadius, setBorderRadius] = useState('none');

    useEffect(() => {
        if (dropdown){
            setBorderRadius('50%')
        } else {
            setBorderRadius('0')
        }
        console.log(dropdown, borderRadius)
    }, [dropdown]);
    useEffect(() => {
        switch (count){
            case 2:
                setColor("blue");
                break;
            case 3:
                setColor("yellow");
                break;
            case 4:
                setColor("maroon");
                break;
            case 5:
                setColor("pink");
                break;
            case 6:
                setColor("purple");
                break;
            default:
                setColor('green');
        }
    }, [count]);

    return (
        <div>
            <div
                className={style.blok}
                onClick={() => setCount(count + 1)}
                style={{
                    background: color,
                    borderRadius: borderRadius
                }}
                >
                    {count}
                </div>
                    <div onClick={() => setDropdown(!dropdown)}>
                        dropdown
                    </div>
            {
                dropdown && <div className={style.dropdown}>
                            1, 2, 3, 4, 5
                        </div>
            }
        </div>
    );
};
export default Contacts;