import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pageNav } from '../actions/navigate_pages';

class SideNav extends Component {
    render() {
        return (
            <div className='h100 col-md-3'>
                <div className='side-nav'>
                    <div className='image-box h30 p20'>
                        <img className='profile-picture' src={window.location.origin + '/images/dallinProfile.jpeg'} alt='dallin and his wife' />
                    </div>
                    <div className='name-box text-center'>
                        <div className='name'>Dallin Major</div>
                        <div className='profession'>full-stack web developer</div>
                    </div>
                    <div className='h50'>
                        <div className='h75 p20'>
                            <div className='row h100'>
                                <div className='col-md-1 h100'></div>
                                <div className='col-md-10 h100'>
                                    <div className='h25 links' onClick={() => this.props.changePage('Home')}><i className="fa fa-home" style={{ 'font-size': '30px' }}> Home</i></div>
                                    <div className='h25 links' onClick={() => this.props.changePage('About')}><i className="fa fa-user-circle-o" style={{ 'font-size': '30px' }}> About Me</i></div>
                                    <div className='h25 links' onClick={() => this.props.changePage('Portfolio')}><i className="fa fa-folder-open" style={{ 'font-size': '30px' }}> Portfolio</i></div>
                                    <div className='h25 links' onClick={() => this.props.changePage('Contact')}><i className="fa fa-envelope" style={{ 'font-size': '30px' }}> Contact</i></div>
                                </div>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-1 h100'></div>
                            <div className='w60 social-links'>
                                <div className='row h100'>
                                    <div className='col-md-4 links'><i className="fa fa-github" style={{ 'font-size': '25px' }}></i></div>
                                    <div className='col-md-4 links'><i className="fa fa-linkedin-square" style={{ 'font-size': '25px' }}></i></div>
                                    <div className='col-md-4 links'><i className="fa fa-facebook-official" style={{ 'font-size': '25px' }}></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    return bindActionCreators({ changePage: pageNav }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);