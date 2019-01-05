import React from 'react';
import classes from './NavigationItems.module.css'

import NavigationItem from "./NavigationItem/NavigationItem"

const navItems = (props) => (
    <div>
        <ul className={classes.NavigationItems}>

            <NavigationItem link={"/orders"} exact> Order </NavigationItem>
            <NavigationItem link={"/auth"} exact> {props.isLogin ? 'Logout' : 'Login'} </NavigationItem>
            <NavigationItem link={"/"} exact> Burger Builder </NavigationItem>
        </ul>
    </div>
);


export default navItems;