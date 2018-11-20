import React, { Component } from 'react';

class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            handle: '',
            bio: '',
            location: '',
            status: '',
            goals: '',
            fitbitusername: '',


        }
    }
    render() {
        return (
            <div>
                <h1>Your Profile</h1>
            </div>
        );
    }
}

export default CreateProfile;