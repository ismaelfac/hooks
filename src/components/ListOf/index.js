import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ListDefault from "./ListDefault";
import { getPosts as getPostsAction } from "../../redux/actions";

class Post extends Component {
    state = {};
    componentDidMount() {
        const { getPosts } = this.props;
        getPosts();
    }
    
    render() {
        const { posts } = this.props;
        return(
            <Fragment>
                <ListDefault posts={posts}/>
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
export default connect(mapStateToProps, mapDispathToProps)(Post);
