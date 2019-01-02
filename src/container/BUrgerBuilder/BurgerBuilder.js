import React from "react"
import {connect} from 'react-redux';


import Aux from '../../hoc/Aux'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Model from '../../component/UI/Model/Model'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'
import Progressbar from '../../component/UI/ProgressBar/Progressbar'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

import axios from '../../axios-order'
import * as actionType from '../../store/action/actionType'


const ITEM_PRICE = {
    cheese: 0,
    bacon: 2,
    meat: 1,
    salad: 3
};

class BurgerBuilder extends React.Component {

    state = {

        purchasable: false,
        purchasing: false,
        loading: false
    };

    componentDidMount() {
        this.props.initIngredient();
    }

    checkPurchasable = (price) => {

        if (price > 4) {
            this.setState({purchasable: true});
        } else {
            this.setState({purchasable: false});
        }
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    addIngredientHandler = (type) => {

        const oldCount = this.props.ingredients[type] + 1;
        const ingredinet = {
            ...this.props.ingredients
        };
        ingredinet[type] = oldCount;
        const price = this.props.price + ITEM_PRICE[type];
        console.log(price);

        this.props.addIngredients(ingredinet);
        this.props.addPrice(price);

        // this.setState({ingredients: ingredinet, price: price});
        this.checkPurchasable(price);

    };

    removeIngredientHandler = (type) => {

        const oldCount = this.props.ingredients[type] - 1;
        if (oldCount < 0) {
            return;
        }

        const ingredinet = {
            ...this.props.ingredients
        };
        console.log(ingredinet);
        ingredinet[type] = oldCount;
        console.log(ingredinet);
        const price = this.props.price - ITEM_PRICE[type];
        console.log(price);
       // this.setState({ingredients: ingredinet, price: price});
        this.props.addIngredients(ingredinet);
        this.props.addPrice(price);
        this.checkPurchasable(price);


    };

    removePopupHandler = () => {
        this.setState({purchasing: false})

    };
    purchaseContinueHandler = () => {

        // const quesryParams = [];
        // for (let i in this.props.ingredients) {
        //     quesryParams.push(encodeURI(i) + '=' + encodeURI(this.props.ingredients[i]));
        // }
        //
        // const queryString = quesryParams.join('&');

        this.props.history.push({
            pathname: '/checkout'
        });
        // console.log("Done bro, Go and Enjoy ");
        // this.setState({loading:true});
        //


    };

    render() {
        const disabledObject = {...this.props.ingredients};
        for (let key in disabledObject) {
            disabledObject[key] = this.props.ingredients[key] <= 0;
        }

        let orderSummary;
        if (this.state.loading) {
            orderSummary = <Progressbar/>
        } else {
            orderSummary = <OrderSummary ingredients={this.props.ingredients}
                                         removePopupHandler={this.removePopupHandler}
                                         purchaseContinueHandler={this.purchaseContinueHandler}
                                         price={this.props.price}
                //loading={this.state.loading}
            />;
        }

        return (

            <Aux>
                <Model show={this.state.purchasing}
                       removePopupHandler={this.removePopupHandler}
                >
                    {orderSummary}
                </Model>
                <Burger ingredient={this.props.ingredients}/>
                <BuildControls onMoreClick={this.addIngredientHandler}
                               onLessClick={this.removeIngredientHandler}
                               disabled={disabledObject}
                               price={this.props.price}
                               purchasable={this.state.purchasable}
                               purchaseHandler={this.purchaseHandler}

                />
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        error: state.burgerBuilder.error
    }
};
const mapActionToDispatcher = (dispatcher) => {
    return {
        addIngredients: (ingredients) => {
            dispatcher(actionType.addIngredient(ingredients))
        },
        addPrice : (price)=>{dispatcher({type: actionType.ADD_PRICE,value: price})},
        initIngredient : () => {dispatcher(actionType.initIngredient())}

    }
};

export default connect(mapStateToProps,mapActionToDispatcher)(withErrorHandler(BurgerBuilder, axios));