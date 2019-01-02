
export const addIngredient = (state, action) => {
    return {
        ...state,
        ingredients: action.value
    };
};

export const addPrice = (state, action) => {
    return {
        ...state,
        price: action.value
    };
};

export const fetchIngredientFailed = (state, action) => {
    return {
        ...state,
        error: action.value
    };
};