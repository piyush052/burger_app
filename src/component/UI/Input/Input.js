import React from 'react'
import classes from './Input.module.css'


const input = (props) => {

    let inputElement = null;
    switch (props.inputtype.elementType) {
        case 'input' :
            inputElement = <input
                className={classes.InputElement}
                {...props.inputtype.elementConfig}
                onChange={props.change}
                value={props.inputtype.value}/>;
            break;

        case 'textarea' :
            inputElement = <textarea
                className={classes.InputElement}
                {...props.inputtype.elementConfig}
                onChange={props.change}
                value={props.inputtype.value}/>;
            break;

        case  'select':
            inputElement = (<select
                className={classes.InputElement}
                value={props.inputtype.value}
                onChange={props.change}
            >

                {props.inputtype.options.map((element) =>
                    (<option key={element.value}
                             value={element.value}>{element.value}
                    </option>))}

            </select>);
            break;

        default :
            inputElement = <input
                className={classes.InputElement}
                onChange={props.change}
                {...props.inputtype.elementConfig}
                value={props.inputtype.value}/>
    }

    return (<div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};


export default input;