import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Paper, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function Page(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={props.image}
                title={props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.content}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
  );
}

export default Page;