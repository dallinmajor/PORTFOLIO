import React, { Component } from 'react';

export default class SideNav extends Component {
    render() {
        return (
            <div className='side-nav col-md-3'>
                <h1>Dallin Major</h1>
                <img className='profile-picture' src={window.location.origin + '/images/dallinProfile.jpeg'} alt='dallin and his wife'/>
                <ul>
                    <div>Home</div>
                    <div>About Me</div>
                    <div>Portfolio</div>
                    <div>Contact</div>
                </ul>
            </div>
        )
    }
}