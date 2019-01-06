import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from "../NavigationsItems/NaviagtionItems"
import Aux from "../../../hoc/Aux"
import BackDrop from "../../UI/Backdrop/Backdrop"

import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    const attachClases=[classes.SideDrawer];
    if(props.show){
        attachClases.push(classes.Open);
    }else{
        attachClases.push(classes.Close)
    }

    return (

        <Aux>
            <BackDrop show={props.show}  clicked={()=>props.removeBackdrop()}/>
            <div className={attachClases.join(" ")}>

                <div className={classes.Logo}>
                    <Logo/>
                </div>


                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>

    );
};


export default sideDrawer;