import axios from '../../axios-order'

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const ADD_PRICE = 'ADD_PRICE';
export const FETCH_INFREDIENTS_FAILED = 'FETCH_INFREDIENTS_FAILED';

export const addIngredient = (value) => {
    return {
        type: ADD_INGREDIENTS,
        value: value
    };
};

const setIngredient = (value) => {
    return {
        type: ADD_INGREDIENTS,
        value: value
    }
};

const fetchIngredientFailed = (value) => {
    return {
        type: FETCH_INFREDIENTS_FAILED,
        value: value
    }
};

export const initIngredient = () => {
    return (dispatch) => {
        axios.get('https://burgerapp052.firebaseio.com/ingredients.json').then(res => {
            let ingredients = {
                cheese: res.data.cheese,
                bacon: res.data.bacon,
                meat: res.data.meat,
                salad: res.data.salad
            };
            dispatch(setIngredient(ingredients));
        }).catch(error => {
            console.log(error);
            dispatch(fetchIngredientFailed(true));
        });
    };
};

