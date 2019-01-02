import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredinetSummary = Object.keys(props.ingredients).map((item, i) => {
        return (<li key={i + "sdj"}>
            <span>{item}</span> : {props.ingredients[item]}
        </li>);
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with following ingredinets </p>
            <ul>{ingredinetSummary}</ul>
            <p>Continue to checkout? <br/><strong>Total price is {props.price.toFixed(2)} $</strong></p>

            <Button clicked={() => props.removePopupHandler()}
                    btnType={"Danger"}>CANCEL</Button>
            <Button btnType={"Success"}
                    clicked={() => props.purchaseContinueHandler()}
            >CONTINUE</Button>
        </Aux>
    );

};

export default orderSummary;