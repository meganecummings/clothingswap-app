import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';


class PostContainer extends Component {
    state = {
        posts: null,
    }

    getPosts() {
        axios.get(`${API_URL}/posts`, { withCredentials:true })
            .then(response => this.setState({ posts: response.data.data }))
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <div className="post-container">
                <div className="post">
                    {/* {this.props.profile && 
                    (<>
                        <img src={this.props.profile.photo} alt={`${this.state.posts.authorUsername}`} /> 
                        <h1>{this.state.post.title}</h1>
                        <p>{this.state.post.content}</p>
                        <p>Posted By: {this.state.post.authorUsername}</p> 
                    </>)} */}
                </div>

            </div>
        );
    };
};

export default PostContainer;