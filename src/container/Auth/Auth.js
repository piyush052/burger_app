import React from 'react'

import Input from '../../component/UI/Input/Input'
import Button from '../../component/UI/Button/Button'


class Auth extends React.Component {

    state = {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
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

    render() {
        return (
            <div>
                <form>
                    <Input inputtype={this.state.email}/>
                    <Input inputtype={this.state.password}/>
                    <Button type='submit'>Login</Button>

                </form>

            </div>
        );

    }

}

export default Auth;