import { combineReducers } from 'redux';
import ProjectsReducer from './projects';
import ActiveProjets from './';

const rootReducer = combineReducers({
    projects: ProjectsReducer,
    activeProjects: ActiveProjets
})

export default rootReducer;
