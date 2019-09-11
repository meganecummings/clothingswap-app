import React, { Component } from 'react';
import axios from 'axios';

// Internal Components
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import { Link } from 'react-router-dom';
import './ProfileContainer.css';
import Event from '../../components/Events/Event';


class ProfileContainer extends Component {
    state ={
        profile: null,
        errors: null,
        events: [],
        items: [],
        updatedProfile: null,
    };

    // ------- LIFE CYCLE FUNCTIONS ---- //
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

    // ------- ERROR HANDLING FUNCTIONS ---- //

    displayErrors = errors => {
       return errors.map((error, index) => (
            <div className="alert" style={{ width:'100%' }} role="alert" key={index}>
                {error.message}
                <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
            </div>
        ));
    };

    // ------- EVENTS FUNCTIONS ---- //

    displayEvents = events => {
        return events.map(foundEvent => (
            <div key={foundEvent._id}>
                <Event event={foundEvent} handleEventDelete={this.props.handleEventDelete} displayPosts={this.displayPosts} />
            </div>
        ));
    };


    getEvents  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/events`, { withCredentials: true })
            .then(response => this.setState({ events: response.data }))
            .catch(error => console.log(error));
    };


    // ------- ITEMS FUNCTIONS ---- //

    displayItems = items => {
        return items.map(foundItem => (
             <div className="profile-item-card" key={foundItem._id}>
                 <Link to={`/item/${foundItem._id}`}>Check out this item</Link>
                 <h4>{foundItem.title}</h4>
                 <p>{foundItem.description}</p>
                 <img src={foundItem.image} alt={`${foundItem.title}`} />
             </div>
         ));
     };

    getItems  = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}/items`, { withCredentials: true })
            .then(response => this.setState({ items: response.data }))
            .catch(error => console.log(error));
    };

    // ------- PROFILE FUNCTIONS ---- //
    displayProfile() {
        return(
            <Profile 
                user={this.state.profile.data} 
                errors={this.state.errors} 
                currentUser={this.props.currentUser}   
                handleChange={this.handleChange}
                handle={this.handleProfilePhotoChange}
            />
        );
    };

    getUserInfo = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(response => this.setState({ profile: response.data }))
            .catch(error => console.log(error));
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleProfileSubmit(event) {
        event.preventDefault();
        console.log(this.state.profile);
        axios.put(`${API_URL}/users/${this.state.profile.data._id}/update`, {
            first_name: this.state.profile.first_name,
            last_name: this.state.profile.last_name,
            email: this.state.profile.email,
            photo: this.state.profile.photo,
            size: this.state.profile.size,
            phone_number: this.state.phone_number
        })
            .then(response => {
                console.log(response.data.data)})
            .catch(error => console.log(error));
    };

    displayProfileEditForm = () => {
        const { email, first_name, last_name, photo, size, phone_number  } = this.state.profile;

        return (
            <div className="add-item grid-form">
                <Link className="exit-form" onClick={() => this.props.history.goBack()}>x</Link>
                <form>
                    <h1>Edit Your Profile</h1>
                    <div className="form-group">
                        <label> First Name </label>
                        <input type="text" value={first_name} onChange={this.handleChange} className="form-control" id="first_name" name="first_name" placeholder={first_name} />
                    </div>
                    <div className="form-group">
                        <label> Last Name </label>
                        <input type="text" value={last_name} onChange={this.handleChange} className="form-control" id="last_name" name="last_name" placeholder={last_name} />
                    </div>
                    <div className="form-group">
                        <label> Email</label>
                        <input type="email" value={email} onChange={this.handleChange} className="form-control" id="email" name="email" placeholder={email} />
                    </div>
                    <div className="form-group">
                        <label> Photo </label>
                        <input type="text" value={photo} onChange={this.handleChange} className="form-control" id="photo" name="photo" placeholder={photo} />
                    </div>
                    <div className="form-group">
                        <label> Size </label>
                        <input type="text" value={size} onChange={this.handleChange} className="form-control" id="size" name="size" placeholder={size} />
                    </div>
                    <div className="form-group">
                        <label> Phone Number </label>
                        <input type="text" value={phone_number} onChange={this.handleChange} className="form-control" id="phone_number" name="phone_number" placeholder={phone_number} />
                    </div>
                    <button onClick={this.handleProfileSubmit}>Submit</button>
                </form>
            </div>
        );
    };

    render() {
        return (
            <div className="profile-page-container">
                {this.state.errors && this.displayErrors(this.state.errors)}
                {(this.props.editProfile && this.state.profile) && this.displayProfileEditForm() }
                <div className="left-side-container">
                    <div className="your-profile-container border">
                        {this.state.profile && this.displayProfile()}
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