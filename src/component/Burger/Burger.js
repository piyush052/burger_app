import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {

    let transfromedIngredients = Object.keys(props.ingredient).map(igKey => {

        return [...Array(props.ingredient[igKey])].map((_,i)=>{
           return  <BurgerIngredient type={igKey} key = {i+igKey}/>
        });

    }).reduce((arr,el)=> {
        return arr.concat(el);
    },[]);

    if(transfromedIngredients.length===0){
        transfromedIngredients= <p>please start adding components </p>
    }
    console.log(transfromedIngredients);

    return (<div className={classes.Burger}>
        <BurgerIngredient type={"bread-top"}/>
        {transfromedIngredients}
        <BurgerIngredient type={"bread-bottom"}/>


    </div>);

};

export default burger;