/**
 * vista estructurada por componentes
 * 
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";

class Admin extends Component {
    render() {
        const { optionsBar } = this.props;
        console.log(optionsBar);
        return(
            <Page optionsBar={[{id:1, title:'Login'},{id:2, title: 'Logout'}]} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        optionsBar: state.optionsBar
    }
}
export default connect()(Admin);
