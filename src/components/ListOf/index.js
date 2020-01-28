import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ListDefault from "./ListDefault";
import { getPosts as getPostsAction } from "../../redux/actions";
import Pagination from 'pagination-react-hooks';


class List extends Component {
    state = {};
    componentDidMount() {
        const { getPosts } = this.props;
        getPosts();
    }    
    render() {
        const { posts } = this.props;
        const show = (posts) => (
            <div>
                {console.log(posts.title)}
                <ListDefault posts={posts}/>
            </div>
        )
        return(
            <Fragment>        
                <Pagination
                    data={posts}
                    Show={show}
                    displayNumber="7"
                    previousText="Anterior"
                    nextText="Siguiente"
                /> 
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
const mapDispathToProps = {
    getPosts: getPostsAction
};
export default connect(mapStateToProps, mapDispathToProps)(List);
