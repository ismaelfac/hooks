import React, { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TopBar from '../../components/navbars/TopBars';

function Page(props) {
    return(
        <Fragment>
            <CssBaseline />
            <TopBar />
            <Container maxWidth="xl">
                
                <h1>Web</h1>
            </Container>  
        </Fragment>
    );
}

export default Page;