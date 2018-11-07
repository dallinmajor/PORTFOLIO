import projectsFiltered from '../actions';

export default ( state = null, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case projectsFiltered:
            return action.payload;
    } 
    return state
}