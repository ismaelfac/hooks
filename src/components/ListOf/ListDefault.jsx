import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Page from './PageDefault';
import PageCard from './PageCard';
import Pagination from 'pagination-react-hooks';

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

const show = (value) => (
  <div>
    {value &&
      <PageCard 
      key={value.id}
      image={value.image}
      title={value.title}
      content={value.content}
    />
    }
  </div>
)

function List(props) {
  const classes = useStyles();
  const { posts } = props;
  
  return (
    <div className={classes.container}>  
        <Pagination
            data={posts}
            Show={show}
            displayNumber="4"
            previousText="Anterior"
            nextText="Siguiente"
          />
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default (List);