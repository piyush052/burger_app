import React from 'react';

import classes from './Model.module.css'
import Backdrop from "../Backdrop/Backdrop"
import Aux from '../../../hoc/Aux'

class  Model extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || this.props.children !== nextProps.children;
    }


    render(){
        const props=this.props;
        return(
            <Aux>
                <Backdrop show={props.show} clicked={props.removePopupHandler}/>
                <div className={classes.Modal}
                     style={{
                         transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: props.show ? 1 : 0
                     }}
                >
                    {props.children}
                </div>
            </Aux>
        );
    }
}

export default Model;

