import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterProjects } from '../actions/filter_projects';
import ToolIcons from '../components/pages/projectsComponents/tool_icons';

class Projects extends Component {
    render() {
        return (
            <div>
                <ToolIcons filterProjects={this.props.filterProjects} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeProjects: state.activeProjects
    }
}

const mapDispatchToProps = (dispatch) => {
    return (bindActionCreators({ filterProjects: filterProjects }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);