import React from 'react';
import Model from "../../component/UI/Model/Model"
import Aux from '../Aux'

const error = (WrappedComponent, axios) => {

    return class extends React.Component {
        state = {
            error: null
        };

        componentWillMount() {
            this.resp = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.req = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.resp);
            axios.interceptors.response.eject(this.req);
        }

        removeErrorFromScreen() {
            this.setState({error: null});
        }

        render() {

            return (
                <Aux>
                    <Model show={this.state.error} removePopupHandler={this.removeErrorFromScreen}>Something did
                        not work ...</Model>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }

    }
};

export default error;