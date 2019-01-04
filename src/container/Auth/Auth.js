import React from 'react'
import {connect} from 'react-redux';

import Input from '../../component/UI/Input/Input'
import Button from '../../component/UI/Button/Button'
import classes from './Auth.module.css'
import ProgressBar from '../../component/UI/ProgressBar/Progressbar'
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
        },
        isSignIn: false
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

        this.props.auth(this.state.email.value, this.state.password.value);


    };
    swithcHandler = ()=>{
        this.setState((prevState)=>{
            return{
                ...prevState,
                isSignIn: !prevState.isSignIn
            }
        })
    };

    render() {
        let uiel = null;
        if (this.props.start) {
            uiel = (<ProgressBar/>);
        } else {
            uiel = (<div className={classes.Auth}>
                <form onSubmit={(event) => this.authHandler(event)}>
                    <Input inputtype={this.state.email} change={(event) => this.changeHandler(event, 'email')}/>
                    <Input inputtype={this.state.password} change={(event) => this.changeHandler(event, 'pwd')}/>
                    <button className={classes.btn} type='submit'>Login</button>
                </form>
                <Button clicked={this.swithcHandler} btnType='Danger'>Switch to {this.state.isSignIn?'SignIn':'SignUp'}</Button>
            </div>);
        }
        return uiel;

    }

}

const mapPropsToState = (state) => {
    return {
        success: state.auth.success,
        start: state.auth.start,
    }
};

const mapPropsToDispatch = (dispatch) => {
    return {
        auth: (email, pwd) => {
            dispatch(auth.authStart(email, pwd))
        }
    }
};

export default connect(mapPropsToState, mapPropsToDispatch)(Auth);