import React from "react";
import {Switch, Route , Redirect} from "react-router-dom";
import {isAuthRoutes , notAuthRoutes} from "../../routes";
import {HOME_PAGE ,LOGIN_PAGE} from "../../UtilsURL/urla";
//checked

const Routes = () => {
    let token = localStorage.getItem('token');

    return (
        <Switch>
            {
                token ? isAuthRoutes.map(({id, path, Component}) => {
                    return <Route key={id} path={path} component={Component} exact/>
                })
            :
                notAuthRoutes.map(({id, path, Component}) => {
                    return <Route key={id} path={path} component={Component} exact/>
                })
            }
       <Redirect to={token ? HOME_PAGE : LOGIN_PAGE}/>
        </Switch>
    )
}
export default Routes;