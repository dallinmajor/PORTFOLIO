import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pageNav } from '../actions/active_page_action';

class SideNav extends Component {
    render() {
        return (
            <div className='h100 col-md-3'>
                <div className='side-nav'>
                    <div className='center-box gray h25'>
                        <img className='profile-picture' src={window.location.origin + '/images/dallinProfile.jpeg'} alt='dallin and his wife' />
                    </div>
                    <div className='h25 gray'>
                        {/* <div className='h50 name'>Dallin</div>
                        <div className='h50 name'>Major</div> */}
                    </div>
                    <div className='h50 silver'>
                        <div className='h75'>
                            <div className='row h100'>
                                <div className='col-md-2 h100'></div>
                                <div className='col-md-10 h100'>
                                    <div className='h25' onClick={() => this.props.changePage('Home')}><i className="fa fa-home" style={{ 'font-size': '30px' }}> Home</i></div>
                                    <div className='h25' onClick={() => this.props.changePage('About')}><i className="fa fa-user-circle-o" style={{ 'font-size': '30px' }}> About Me</i></div>
                                    <div className='h25' onClick={() => this.props.changePage('Portfolio')}><i className="fa fa-folder-open" style={{ 'font-size': '30px' }}> Portfolio</i></div>
                                    <div className='h25' onClick={() => this.props.changePage('Contact')}><i className="fa fa-envelope" style={{ 'font-size': '30px' }}> Contact</i></div>
                                </div>

                            </div>
                        </div>
                        <div className='container'>
                            <div className='row h100'>
                                <div className='col-md-4'><i className="fa fa-github" style={{ 'font-size': '30px' }}></i></div>
                                <div className='col-md-4'><i className="fa fa-linkedin-square" style={{ 'font-size': '30px' }}></i></div>
                                <div className='col-md-4'><i className="fa fa-facebook-official" style={{ 'font-size': '30px' }}></i></div>
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