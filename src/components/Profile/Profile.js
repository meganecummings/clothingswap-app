import React from 'react';
import './Profile.css';

const Profile = ({ user: { _id, photo, username, email, first_name, last_name}, currentUser, handleEdit, errors, handlePhotoChange, handleProfilePhotoChange }) => {

    return (
        <div className="profile-page card border">
            <h1 className="profile-heading">Profile Page</h1>
            <div className="profile-container border">
                <div className="profile-image"><img src={photo} alt={`${username}'s Avatar`}/></div>
                <div className="profile-content">
                    { errors ? errors : null }
                    <h3><strong>Username:</strong>{username}</h3>
                    <h3><strong>Email:</strong>{email}</h3>
                    <h3><strong>First Name:</strong>{first_name}</h3>
                    <h3><strong>Last Name:</strong>{last_name}</h3>
                    {currentUser === _id && <button onClick={event => {handleEdit(event,_id)}}  >Edit</button>}

                </div>
            </div>
        </div>
    )
};

export default Profile;
