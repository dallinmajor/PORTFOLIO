import React, {Component} from 'react';
import { connect } from 'react-redux';

class DisplayPage extends Component {
    render() {
        switch(this.props.page) {
            case 'Home':
                return (
                    <div>Home!</div>
                );
            break;
            case 'About':
                return (
                    <div>About</div>
                );
            break;
            case 'Portfolio':
                return (
                    <div>Portfolio</div>
                )
            break;
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