import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageCard from './PageCard';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}));

const List = (props) => {
  const classes = useStyles();
  const { posts } = props;

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <div className={classes.container}>
          {posts.map((post) => 
            <PageCard 
              key={post.id}
              image={post.image}
              title={post.title}
              content={post.content}
            />
          )}
      </div>
    </Grid>
  );
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default (List);