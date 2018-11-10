import Projects from './projects';

export default ( state = Projects, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'FILTER_SELECTED':
            return action.payload;
    }

    return state;
}