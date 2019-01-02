import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

//import classes from 'CheckoutSummary.module.css'


const checkoutSummary = (props) => {


    return (
        <div >
            <h1 style={{textAlign: 'center'}}> Hope it will taste Good!!</h1>

            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredient={props.ingredient}/>
                <div style={{textAlign:'center'}}>
                <Button clicked={props.checkoutContinue} btnType={'Success'}> Continue</Button>
                <Button clicked={props.checkoutCancel} btnType={'Danger'}> Cancel</Button>
                </div>

            </div>

        </div>
    );

};


export default checkoutSummary;