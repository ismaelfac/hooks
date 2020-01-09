import React, { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TopBar from '../../components/navbars/TopBars';

function Page(props) {
    console.log(props)
    return(
        <Fragment>
             <CssBaseline />
             <TopBar optionsBar={props.optionsBar} />
            <Container maxWidth="xl">
                <h1>Administrador</h1>
            </Container>  
        </Fragment>
    );
}

export default Page;