import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";

class Autocomplete extends Component {
    state = {};
    render() {
        const { label, arrayData } = this.props;
        return(
            <Page label={label} arrayData={arrayData} />
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps)(Autocomplete);
