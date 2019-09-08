import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';


class PostContainer extends Component {
    state = {

    }

    componentDidMount() {
        const postId = 
        axios.get(`${API_URL}/posts/${postId}`)
        // make axios call with url with id of the param
        // url = localhost:3001/api/v1/posts:id
        // set state to the res.data
        // send that as prop to post below
    }

    render() {
        return (
            <div className="post-container">
                <div className="post">
                    <img src={this.state.post.imageUrl} alt={`${this.state.post.title}`} />
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.content}</p>
                    <p>Posted By: {this.state.post.authorUsername}</p>
                </div>

            </div>
        );
    };
};

export default PostContainer;