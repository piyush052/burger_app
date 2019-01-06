import axios from "../../axios-order";
import * as actionType from "./actionType";

export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAILED = 'PURCHASE_BURGER_FAILED';
export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const FETCH_ORDER_START = 'FETCH_ORDER_START';



const fetchOrder= (data)=>{
    return{
        type: FETCH_ORDER_START,
        value : data
    }
};

export const fetchOrderStart= ()=>{


    return (dispatcher)=> {
        axios.get("/orders.json").then(responnse => { // for token add '?auth= [token] which is in redux store
            //console.log(JSON.parse(JSON.stringify(responnse.data)));
            const fetchArr = [];
            for (let key in responnse.data) {
                fetchArr.push({
                    ...responnse.data[key],
                    key: key
                });
            }

            dispatcher(fetchOrder(fetchArr));

            }, error => {
            dispatcher(fetchOrder([]));

        });
    }

};

export const purchaseBurgerSuccces = (id, orderData) => {

    return {
        type: PURCHASE_BURGER_SUCCESS,
        value: orderData,
        id :id
    }

};
export const purchaseBurgerFailed = () => {

    return {
        type: PURCHASE_BURGER_FAILED,
        value: false
    }

};


export const purchaseBurgerStart= ()=>{
    return{
        type: PURCHASE_BURGER_START
    }
};


export const purchaseStart = (orderData,history) => {
    return (dispatch) => {

        dispatch(purchaseBurgerStart());

        axios.post("/orders.json", orderData).then(response => {
            console.log(response.data);

            dispatch(purchaseBurgerSuccces(response.data.name, orderData));
            history.push('/');
            dispatch({type: actionType.ADD_PRICE,value: 4});

            // this.setState({loading: false});
            // this.props.history.push('/');
        }).catch(error => {

            dispatch(purchaseBurgerFailed(true));
            // this.setState({loading: false});
            // alert(error);
        });

    }
};

