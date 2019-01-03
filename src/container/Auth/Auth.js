import React from 'react'
import {connect} from 'react-redux';

import Input from '../../component/UI/Input/Input'
import classes from './Auth.module.css'
import * as auth from '../../store/action/Auth'


class Auth extends React.Component {

    state = {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your Email'
            },
            value: ""
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Your Password'
            },
            value: ""
        }
    };

    changeHandler = (event, key) => {
        if (key === 'email') {
            let st = this.state.email;
            st.value = event.target.value;
            this.setState({
                email: st
            });
        } else {
            let st = this.state.password;
            st.value = event.target.value;
            this.setState({
                password: st
            });
        }


    };

    authHandler = (event) => {
        event.preventDefault();


    };

    render() {
        return (
            <div className={classes.Auth}>
                <form onSubmit={(event) => this.authHandler(event)}>
                    <Input inputtype={this.state.email} change={(event) => this.changeHandler(event, 'email')}/>
                    <Input inputtype={this.state.password} change={(event) => this.changeHandler(event, 'pwd')}/>
                    <button className={classes.btn} type='submit'>Login</button>
                </form>
            </div>
        );

    }

}
const mapPropsToState= (state)=>{
                return{
                    success : state.auth.success,
                    start : state.auth.start,
                }
};

const mapPropsToDispatch = (dispatch)=>{
    return {
        auth : (email, pwd)=> {dispatch(auth.authStart(email,pwd))}
    }
};

export default connect(mapPropsToState,mapPropsToDispatch) (Auth) ;