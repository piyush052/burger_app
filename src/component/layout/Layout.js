import React from 'react';
import {connect} from 'react-redux'
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends React.Component {

    state = {
        show: false
    };

    removeBackdrop = () => {
        this.setState({show: false})

    };

    openSidebarHandler = () => {
        this.setState((prevState) => {
            return {show: !prevState.show}
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar isLogin={this.props.isLogin} menuClicked={this.openSidebarHandler}>Toolbar, Sidebar, Navigation</Toolbar>
                <SideDrawer height={"11%"} show={this.state.show} removeBackdrop={this.removeBackdrop}/>
                <main className={classes.Content}> {this.props.children}</main>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.success
    }
};
export default connect(mapStateToProps)(Layout);