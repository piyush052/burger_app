import React from 'react';
import BuildControl from '../BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const ingredients = [
    {name: "Salad", type: "salad"},
    {name: "Meat", type: "meat"},
    {name: "Bacon", type: "bacon"},
    {name: "Cheese", type: "cheese"}
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <div>Total price is : <strong>{props.price}</strong></div>
        {ingredients.map(ingredient => {
            return <BuildControl key={ingredient.name}
                                 label={ingredient.name}
                                 type={ingredient.type}
                                 addClick={props.onMoreClick}
                                 lessClick={() => props.onLessClick(ingredient.type)}
                                 disabled={props.disabled[ingredient.type]}
            />
        })}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={()=>props.purchaseHandler()}
        ><strong>ORDER NOW</strong></button>
    </div>
);
export default buildControls;
