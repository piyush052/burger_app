import React from "react";
import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'
import Menu from '../SideDrawer/DrawerToggle'
import NavigationItems from '../NavigationsItems/NaviagtionItems'


const toolbar = (props) =>
 (
    <header className={classes.Toolbar}>
        <Menu  click={props.menuClicked}>Menu</Menu>
        <Logo/>
        <nav className={classes.DesktopOnly}> <NavigationItems isLogin={props.isLogin}/></nav>
    </header>

);
export default toolbar;