import React from 'react';
import Tools from '../../../reducers/tools';

const ToolIcons = (filterProjects) => {
    return (
        <div className='devIcons w100'>
            <div className='iconRow w100'>
                <i className="devicon-babel-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-git-plain"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-heroku-original"></i>
                <i className="devicon-javascript-plain"></i>
            </div>
            <div className='iconRow w100'>
                <i className="devicon-jquery-plain"></i>
                <i className="devicon-mongodb-plain"></i>
                <i className="devicon-mysql-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-sequelize-plain"></i>
            </div>
        </div>
    )
}

export default ToolIcons;