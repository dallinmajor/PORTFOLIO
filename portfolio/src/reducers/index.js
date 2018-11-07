import { combineReducers } from 'redux';
import ProjectsReducer from './projects';

const rootReducer = combineReducers({
    projects: ProjectsReducer
})

export default rootReducer;
