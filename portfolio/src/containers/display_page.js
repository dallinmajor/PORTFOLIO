import React, {Component} from 'react';
import Projects from '../containers/projects';
import AboutMePage from '../components/pages/about';
import { connect } from 'react-redux';

class DisplayPage extends Component {
    render() {
        switch(this.props.page) {
            case 'Home':
                return (
                    <div>Home!</div>
                );
            case 'About':
                return (
                    <AboutMePage/>
                );
            case 'Projects':
                return (
                    <Projects/>
                )
            case 'Contact':
                return (
                    <div>Contact</div>
                );
            default:
                return (
                    <div>Home</div>
                );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
};

export default connect(mapStateToProps)(DisplayPage);