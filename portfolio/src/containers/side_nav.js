import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SideNav extends Component {
    render() {
        return (
            <div className='side-nav col-md-3'>
                <h1>Dallin Major</h1>
                <img className='profile-picture' src={window.location.origin + '/images/dallinProfile.jpeg'} alt='dallin and his wife' />
                <ul>
                    <div><i class="fa fa-home"></i> Home</div>
                    <div><i class="fa fa-user"></i> About Me</div>
                    <div><i class="fa fa-archive"></i> Portfolio</div>
                    <div><i class="fa fa-envelope"></i> Contact</div>
                </ul>
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin-square"></i>
                <i class="fa fa-facebook-official"></i>
            </div>
        )
    }
}