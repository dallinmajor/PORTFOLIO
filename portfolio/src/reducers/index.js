import { combineReducers } from 'redux';
import ProjectsReducer from './projects';
import ActiveProjects from './activeProjects';
import ActivePage from './activePage';

const rootReducer = combineReducers({
    projects: ProjectsReducer,
    activeProjects: ActiveProjects,
    page: ActivePage
})

export default rootReducer;
