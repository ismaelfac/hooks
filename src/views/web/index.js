import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";

class Web extends Component {
    state = {};
    render() {
        const { optionsBar } = this.props;
        console.log(optionsBar);
        return(
            <Page optionsBar={[]} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        optionsBar: state.Options
    }
}
export default connect(mapStateToProps)(Web);
