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
                    <div onClick={() => this.props.changePage('Home')}><i className="fa fa-home" style={{'font-size': '30px' }}> Home</i></div>
                    <div onClick={() => this.props.changePage('About')}><i className="fa fa-user-circle-o" style={{'font-size': '30px' }}> About Me</i></div>
                    <div onClick={() => this.props.changePage('Portfolio')}><i className="fa fa-folder-open" style={{'font-size': '30px' }}> Portfolio</i></div>
                    <div onClick={() => this.props.changePage('Contact')}><i className="fa fa-envelope" style={{'font-size': '30px' }}> Contact</i></div>
                </ul>
                <i className="fa fa-github" style={{'font-size': '30px'}}></i>
                <i className="fa fa-linkedin-square" style={{'font-size': '30px'}}></i>
                <i className="fa fa-facebook-official" style={{'font-size': '30px'}}></i>
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