import React, {Component} from 'react';

import Layout from './component/layout/Layout'
import BurgerBuilder from './container/BUrgerBuilder/BurgerBuilder'
import Checkout from "./container/checkout/Checkout";
import {Route, Switch} from "react-router-dom";

import Orders from '../src/container/Order/Orders'
import ContactData from './container/ContactData/ContactData'
import Auth from './container/Auth/Auth'

class App extends Component {
    render() {
        return (
            <Layout>

                <Switch>
                    <Route path='/checkout/contact-data' exact component={ContactData}/>
                    <Route path='/auth' exact component={Auth}/>
                    <Route path='/checkout' exact component={Checkout}/>
                    <Route path='/orders' exact component={Orders}/>
                    <Route path='/' exact component={BurgerBuilder}/>
                </Switch>

                {/*<BurgerBuilder>some thing is here </BurgerBuilder>*/}
                {/*<Checkout/>*/}
            </Layout>
        );
    }
}

export default App;
