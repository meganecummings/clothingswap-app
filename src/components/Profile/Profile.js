import React from 'react';
import './Profile.css';

const Profile = ({ user: {photo, username, email, first_name, last_name} }) => {

    return (
        <div className="profile-page">
            <h1 className="profile-heading">Profile Page</h1>
            <div className="profile-container">
                <img src={photo} alt="Profile Avatar"/>
                <h3><strong>Username:</strong>{username}</h3>
                <h3><strong>Email:</strong>{email}</h3>
                <h3><strong>First Name:</strong>{first_name}</h3>
                <h3><strong>Last Name:</strong>{last_name}</h3>
            </div>
        </div>
    )
};

export default Profile;
