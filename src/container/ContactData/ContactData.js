import React from 'react'
import classes from './ContactData.module.css'

import Button from '../../component/UI/Button/Button'
import axios from '../../axios-order'
import ProgressBr from '../../component/UI/ProgressBar/Progressbar'

import Input from '../../component/UI/Input/Input'
import {connect} from "react-redux";

import * as order from "../../store/action/Order"
import * as actioType from "../../store/action/actionType"


class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: '',
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ""
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Your Address'
                },
                value: ""
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zipcode'
                },
                value: ""
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: ""
            },
            mobile: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Mobile'
                },
                value: ""
            },

            extra: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Any changes'
                },
                value: ""
            },
            deliveryMethod: {
                elementType: 'select',
                options: [
                    {value: 'for unwell'},
                    {value: 'fastest'}
                ]
            }
        }
    };
    orderHandler = (event) => {
        event.preventDefault();

        console.log('heere');

        const ingredients = this.props.ingredients;
        this.setState({loading: true});
        let formData = {};
        for (let el in this.state.orderForm) {
            formData[el] = this.state.orderForm[el].value;
        }
        const order = {
            ingredients: ingredients,
            price: this.state.price,
            customer: formData
        };

        this.props.purchaseStart1(order,this.props.history);
        // axios.post("/orders.json", order).then(response => {
        //     console.log(response.data);
        //     this.setState({loading: false});
        //     this.props.history.push('/');
        // }).catch(error => {
        //     this.setState({loading: false});
        //     // alert(error);
        // });

    };
    eventChnageHandler = (event, formIdentifire) => {


        let orderfrom = {
            ...this.state.orderForm
        };
        orderfrom[formIdentifire].value = event.target.value

        this.setState({'orderForm': orderfrom});
        console.log(this.state.orderForm[formIdentifire])

    };

    render() {

        let formArr = [];

        for (let element in this.state.orderForm) {
            formArr.push({
                key: element,
                config: this.state.orderForm[element]
            });
        }
        return (
            <div className={classes.ContactData}>
                {this.props.loader ? <ProgressBr/> : null}
                <h4 style={{marginLeft: 15}}>
                    Enter your data
                </h4>
                <div className={classes.CustomForm}>
                    <form onSubmit={this.orderHandler}>
                        {
                            formArr.map(el => (<Input key={el.key}
                                                      inputtype={el.config}
                                                      change={(event) => this.eventChnageHandler(event, el.key)}
                            />))

                        }
                        <button className={classes.btn}  type="submit">Order</button>

                    </form>
                </div>


            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        loader: state.order.loader
    }
};

const mapDispatchToProps = (dispatcher) => {
    return {
        purchaseStart1: (orderData,history) => {
            dispatcher(order.purchaseStart(orderData,history))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);