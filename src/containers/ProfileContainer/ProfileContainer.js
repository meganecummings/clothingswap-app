import React, { Component } from 'react';
import axios from 'axios';

// Internal Components
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import { Link } from 'react-router-dom';
import './ProfileContainer.css';
import EventsContainer from '../../containers/EventsContainer/EventsContainer';
import Event from '../../components/Events/Event';
import Post from '../../components/Post/Post';

class ProfileContainer extends Component {
    state ={
        profile: null,
        posts: [],
        errors: null,
        events: [],
        items: []
    };

    handlePostDelete = event => {
        event.preventDefautl()
        console.log(event.target);
        this.deletePost();
    };

    componentDidMount() {
        this.getUserInfo();
        this.getEvents();
        this.getItems();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.getUserInfo();
        };
    };

    getUserInfo = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(response => this.setState({ profile: response.data }))
            .catch(error => console.log(error));
    };

    getItems  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/items`, { withCredentials: true })
            .then(response => this.setState({ items: response.data }))
            .catch(error => console.log(error));
    };

    getEvents  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/events`, { withCredentials: true })
            .then(response => this.setState({ events: response.data }))
            .catch(error => console.log(error));
    };

    getPosts  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/posts`, { withCredentials: true })
            .then(response => this.setState({ items: response.data }))
            .catch(error => console.log(error));
    };

    displayItems = items => {
       return items.map(foundItem => (
            <div className="items" key={foundItem._id}>
                <Link to={`/items/${foundItem._id}`}>Check out this item</Link>
                <h4>{foundItem.title}</h4>
                <p>{foundItem.description}</p>
                <img src={foundItem.image} alt={`${foundItem.title}`} />
            </div>
        ));
    };

    displayErrors = errors => {
       return errors.map((error, index) => (
            <div className="alert" style={{ width:'100%' }} role="alert" key={index}>
                {error.message}
                <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
            </div>
        ));
    };

    displayEvents = events => {
        return events.map(foundEvent => (
            <div className="your-events-container" key={foundEvent._id}>
                <Event event={foundEvent} handleEventDelete={this.props.handleEventDelete} displayPosts={this.displayPosts} />
            </div>
        ));
    };

    displayPosts = posts => {
        return posts.map(post => {
            return(
                <div className="your-posts-container" key={post._id}> 
                    <Link to={`/posts/${post._id}`} ></Link>
                    <Post title={post.title} authorUsername={post.authorUsername} description={post.description} content={post.content} />
                </div>
            )
        });
    };

    handleProfileEdit = () => {

    };


    render() {
        return (
            <div className="profile-page-container">
                {this.state.errors && this.displayErrors(this.state.errors)}
                
                <div className="left-side-container">
                    <div className="your-profile-container border">
                        {this.state.profile && 
                            <Profile 
                                user={this.state.profile.data} 
                                errors={this.state.errors} 
                                currentUser={this.props.currentUser}   
                                handleEdit={this.handleProfileEdit}
                            />}
                    </div>
                    <div className="your-events-container border">
                        <h2> Events You're Hosting </h2>
                        {this.state.events.length ? this.displayEvents(this.state.events) : <p> You Don't Have Any Events Yet. Add some Soon! </p>}
                    </div>
                </div>
                <div className="your-items-container border">
                    <h2> Your Items </h2>
                    {this.state.items.length ? this.displayItems(this.state.items) : <p>You Don't Have Any Items Yet. Add some Soon! </p>}
                </div>
            </div>
        )
    }
};

export default ProfileContainer;