import React  from 'react';
import { Link } from 'react-router-dom';


const ProfileEdit = () => {
    return (
        <div className="btn-group mb-4" role="group">
        <Link to="/edit-profile" className="btn btn-light">
        Edit Profile</Link>
        </div>
    )

}

export default ProfileEdit;