import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBars(props) {
  const classes = useStyles();
  const {
    optionsBar
  } = props;
  const isAuth = (optionsBar.length === 0 ? false : true);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {isAuth ?
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Button component="button" href="/" color="inherit">{optionsBar[1].title}</Button>
            </div>
            :
            <Fragment>
              <Button component="button" href="/sign-in-side" color="inherit">
                Login
              </Button>
            </Fragment>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}