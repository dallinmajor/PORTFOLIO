
export default (state = null, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'PAGE_SELECTED':
            return action.page;
    }
    return state
}