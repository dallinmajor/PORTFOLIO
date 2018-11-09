import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterProjects} from '../../actions/filter_projects';
class PortfolioPage extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeProjects: state.activeProjects
    }
}

const mapDispatchToProps = (dispatch) => {
    return(bindActionCreators({filterProjects: filterProjects}, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);