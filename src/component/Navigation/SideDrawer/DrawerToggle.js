import React from 'react'

import classes from "./DrawerToggle.css"

const menu =(props)=>(
    <div className={classes.DrawerToggle} onClick={()=>props.click()}>{props.children}
        <div ></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;