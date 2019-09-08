import React from 'react';
import './Profile.css';

const Profile = ({ user: { _id, photo, username, email, first_name, last_name}, currentUser, errors }) => {

    return (
        <div className="profile-page">
            <h1 className="profile-heading">Profile Page</h1>
            <div className="profile-container">
                <div className="profile-image"><img src={photo} alt={`${username}'s Avatar`}/></div>
                <div className="profile-content">
                    { errors ? errors : null }

                    <h3><strong>Username:</strong>{username}</h3>
                    <h3><strong>Email:</strong>{email}</h3>
                    <h3><strong>First Name:</strong>{first_name}</h3>
                    <h3><strong>Last Name:</strong>{last_name}</h3>
                    {currentUser === _id && <button>Edit</button>}

                </div>
            </div>
        </div>
    )
};

export default Profile;
