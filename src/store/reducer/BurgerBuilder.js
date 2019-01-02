import * as actionType from '../action/actionType'
import * as burgerBuilderAction from '../Utility'

const initialState = {
    ingredients: {
        cheese: 0,
        bacon: 0,
        meat: 0,
        salad: 0
    },
    price: 4,
    error : false
};


const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENTS :return burgerBuilderAction.addIngredient(state,action);
        case actionType.ADD_PRICE : return burgerBuilderAction.addPrice(state,action);
        case actionType.FETCH_INFREDIENTS_FAILED : return burgerBuilderAction.fetchIngredientFailed(state,action);

        default:
            return state;
    }
};

export default burgerBuilder;