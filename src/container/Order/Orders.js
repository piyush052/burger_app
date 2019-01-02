import React from 'react'

import Order from '../../component/Orders/Order'
import axios from '../../axios-order'

import * as orderAction from "../../store/action/Order"

import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

import {connect} from 'react-redux'


class Orders extends React.Component {


    componentDidMount() {
        this.props.fetchOrders();
        // axios.get("/orders.json").then(responnse => {
        //     console.log(JSON.parse(JSON.stringify(responnse.data)));
        //
        //   const  fetchArr = [];
        //
        //     for (let key in responnse.data){
        //         fetchArr.push({
        //             ...responnse.data[key],
        //             key : key
        //         });
        //     }
        //
        //     this.setState({orders: fetchArr});
        // }, error=>{
        //
        // })

    }

    render() {
        let orders = [];
        this.props.orders.forEach(el => {
            orders.push(<Order key={el.key} data={el}/>);
        });
       // console.log(orders);
        return (
            <div>
                {orders}
            </div>
        );
    }

}

const mapPropsToState = (state) => {
    return {
        orders: state.order.allOrders
    }
};
const mapPropsToDispatch = (dispatch) => {
    return {
        fetchOrders: () => {
            dispatch(orderAction.fetchOrderStart())
        }
    }
};

export default connect(mapPropsToState, mapPropsToDispatch)(WithErrorHandler(Orders, axios));