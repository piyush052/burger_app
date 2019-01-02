import React from 'react'

import CheckoutSummary from '../../component/Order/CheckoutSummary/CheckoutSummary'
import {Route} from "react-router-dom";
import ContactData from '../../container/ContactData/ContactData'

import {connect} from 'react-redux'


class Checkout extends React.Component {

    state = {

        loading: false

    };

    // componentDidMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //
    //
    //     //  console.log("----->", query, query.entries());
    //     let  ingredients ={
    //         salad: parseInt(query.get('salad')),
    //         cheese: parseInt(query.get('cheese')),
    //         meat: parseInt(query.get('meat')),
    //         bacon: parseInt(query.get('bacon'))
    //     };
    //     //  for (let param in query.entries()){
    //     //      // param = [ 'bacon', 1]
    //     //      console.log("------->",param)
    //     //      ingredients[param[0]]= param[1];
    //     //
    //     //  }
    //     //  console.log(ingredients);
    //
    //
    //     console.log("---------------", ingredients);
    //
    //
    //     this.setState({
    //         ingredients:ingredients
    //     }
    //     );
    //     console.log(this.state.ingredients)
    //
    // }

    checkoutContinuehandler = () => {
        // hit the api and store the data
        this.props.history.push('/checkout/contact-data');
    };

    checkoutCancelHandler = () => {
        // go back to previous page
        console.log("Cancel");
        this.props.history.goBack();
    };

    render() {
        console.log(this.props);
        console.log(this.props.match.path + '/contact-data');
        let checkoutSummary = (
            <CheckoutSummary
                checkoutContinue={() => this.checkoutContinuehandler()}
                ingredient={this.props.ingredients}
                checkoutCancel={() => this.checkoutCancelHandler()}
            />
        );
        if (this.state.loading) {
            checkoutSummary = null;
        }
        return (<div>
            {checkoutSummary}
            <Route path={ '/checkout/contact-data'} exact render={()=>(<ContactData/>)}/>
        </div>);
    }

}

const mapStateToProps= state=>{
            return{
                ingredients : state.burgerBuilder.ingredients
            }
};

export default connect(mapStateToProps)(Checkout);