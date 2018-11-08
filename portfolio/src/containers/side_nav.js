import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { pageNav } from '../actions/active_page_action';

class SideNav extends Component {
    render() {
        return (
            <div className='side-nav col-md-3'>
                <h1>Dallin Major</h1>
                <img className='profile-picture' src={window.location.origin + '/images/dallinProfile.jpeg'} alt='dallin and his wife' />
                <ul>
                    <div onClick={() => this.props.changePage('Home')}><i class="fa fa-home"></i> Home</div>
                    <div onClick={() => this.props.changePage('About')}><i class="fa fa-user"></i> About Me</div>
                    <div onClick={() => this.props.changePage('Portfolio')}><i class="fa fa-archive"></i> Portfolio</div>
                    <div onClick={() => this.props.changePage('Contact')}><i class="fa fa-envelope"></i> Contact</div>
                </ul>
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin-square"></i>
                <i class="fa fa-facebook-official"></i>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changePage: pageNav}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);