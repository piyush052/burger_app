import * as order from '../action/Order';

const initalState = {
    orderData: [],
    loader: false,
    allOrders: []
};


const reducer = (state = initalState, action) => {

    switch (action.type) {

        case  order.PURCHASE_BURGER_SUCCESS :

            const newObj = {
                ...action.value,
                id: action.id
            };
            return {
                ...state,
                loader: false,
                orderData: state.orderData.concat(newObj)
            };
        case  order.PURCHASE_BURGER_FAILED :
            return {
                ...state,
                loader: false
            };
        case order.PURCHASE_BURGER_START :
            return {
                ...state,
                loader: true
            };

        case  order.FETCH_ORDER_START :
            return {
                ...state,
                allOrders: action.value
            };
        default :
            return state;
    }

};

export default reducer;