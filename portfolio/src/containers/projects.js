import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterProjects } from '../actions/filter_projects';
import ToolIcons from '../components/pages/projectsComponents/tool_icons';
import ProjectThumbNail from '../components/pages/projectsComponents/project_displays';

class Projects extends Component {
    render() {
        return (
            <div className='overflow'>
                <ToolIcons filterProjects={this.props.filterProjects} />
                <div className='p30'>
                <div className='row'>
                    <ProjectThumbNail />
                    <ProjectThumbNail/>
                    <ProjectThumbNail/>
                    <ProjectThumbNail />
                    <ProjectThumbNail/>
                    <ProjectThumbNail/>
                    <ProjectThumbNail />
                    <ProjectThumbNail/>
                    <ProjectThumbNail/>
                </div>
                </div>
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