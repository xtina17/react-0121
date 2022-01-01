import React, {useState} from "react";
import style from "./header.module.css";
import Logo from "./logo/logo";
import {GiHamburgerMenu} from "react-icons/gi";
import cn from "classnames";
import {NavLink, useHistory} from "react-router-dom";
import {isAuthRoutes, notAuthRoutes} from "../../routes";
import Button from "../Global/button/button";
import {LOGIN_PAGE} from '../../UtilsURL/urla';
import Search from "../HeadersComponents/Search/search";
import Languages from "../Language/language";
//checked

const  Header = () => {
    const history = useHistory();

    const [openMenu , setOpenMenu] = useState(false);
    const showMenu = () => {
        setOpenMenu(!openMenu);
    }

    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload();
        if (localStorage.getItem('token')){
            history.push(LOGIN_PAGE);
        }
    }
    return (
        <header className={style.header}>
           <Logo/>
            <Search/>
            <ul className={cn(style.headersUl)} style={{display: openMenu === true && "flex"}}>
                {
                    localStorage.getItem('token')  ? isAuthRoutes.map(({id, path, name}) => {
                        return (
                            <li key={id}>
                                <NavLink
                                    exact to={path}
                                    className={style.link}
                                    activeClassName={style.active}
                                >{name}
                                </NavLink>
                            </li>

                        )
                    })
                :
                    notAuthRoutes.map(({id, path, name})=> {
                    return (
                    <li key={id}>
                    <NavLink
                    exact
                    to={path}
                    className={style.link}
                    activeClassName={style.active}
                    >
                {name}
                    </NavLink>
                    </li>
                    )
                })
                }

            </ul>
            <Languages/>
            {localStorage.getItem('token') && <Button onClick={logout} cn="logoutButton">Logout</Button>}
            <div className={style.icon} onClick={showMenu}>
                <GiHamburgerMenu/>
            </div>
        </header>
    )
}
export default Header;