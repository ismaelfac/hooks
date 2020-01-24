import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";

class Admin extends Component {
    state = {};
    render() {
        const { optionsBar } = this.props;
        return(
            <Page optionsBar={optionsBar} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        optionsBar: state.options
    }
}
export default connect(mapStateToProps)(Admin);
