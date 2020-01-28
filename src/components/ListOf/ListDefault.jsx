import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Page from './PageDefault';
import PageCard from './PageCard';

const useStyles = makeStyles(theme => ({
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

function List(props) {
  const classes = useStyles();
  const { posts } = props;
   console.log(posts)
  return (
    <div className={classes.container}>  
      {posts &&
        posts.map(post => {
          return(
            <div className={classes.paper}>
              <Page 
                key={post.id}
                image={post.image}
                title={post.title}
                content={post.content}
              />
            </div> 
        )})        
      }
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default (List);