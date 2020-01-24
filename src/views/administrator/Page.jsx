import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from '../../components/navbars/TopBars';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Posts from '../../components/ListOf/index';
import Autocomplete from '../../components/autocomplete';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flex: '1 0 auto',
        margin: theme.spacing(1),
      },
  }));

function Page(props) {
    const classes = useStyles();
    return(
        <Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <Alert
                    action={
                        <Button color="inherit" size="small">UNDO</Button>
                    }
                    >
                    This is a success alert — check it out!
                </Alert>
            </div>
            <TopBar optionsBar={props.optionsBar} />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Autocomplete />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Posts />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>  
        </Fragment>
    );
}

export default Page;