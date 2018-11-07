import React, { Component } from 'react';

export default class SideNav extends Component {
    render() {
        return (
            <div className='side-nav col-md-3'>
                <h1>Dallin Major</h1>
                <img className='profile-picture' src={window.location.origin + '/images/dallinProfile.jpeg'} alt='dallin and his wife'/>
                <ul>
                    <li className='nav-link active'>Home</li>
                    <li className='nav-link '>About Me</li>
                    <li className='nav-link '>Portfolio</li>
                    <li className='nav-link '>Contact</li>
                </ul>
            </div>
        )
    }
}