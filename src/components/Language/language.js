import React, {useState} from 'react';
import ARM from './FlagImages/Armenia.jpg';
import RUS from './FlagImages/Russia.png';
import UK from './FlagImages/USA.png';
import style from './language.module.css';

const Languages = () => {
    const [currentLanguage , setCurrentLanguage] = useState(1);

    const Language = [
        {id: 1, flag: ARM},
        {id: 2, flag: RUS},
        {id: 3, flag: UK}
    ]
    const changeLanguage = (id) => {
        setCurrentLanguage(id)
    }
    return (
        <ul className={style.flagUl}>
            {
                Language.map( itm => {
                    return (
                        <li key={itm.id} className={style.flagLi} onClick={ () => changeLanguage(itm.id)}>
                            <img src={itm.flag} align="flag" className={currentLanguage === itm.id ? style.activeFlag : null} />
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Languages;