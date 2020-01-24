import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";
import { Divider } from "@material-ui/core";
class Auth extends Component {
    state = {};
    componentDidMount() {

    }
    render() {
        const {
            
        } = this.props;
        return(
            <Page email_label='Email Address' password_label='Password' sign_in='Sign in' forgot='forgot password?' remember='Remember me'/>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    };
};
const mapDispathToProps = {
    
};
export default connect(mapStateToProps, mapDispathToProps)(Auth);
