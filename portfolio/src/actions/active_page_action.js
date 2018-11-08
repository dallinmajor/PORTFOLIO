export function pageNav(page) {
    console.log(page);
    return {
        type: 'PAGE_SELECTED',
        page: page
    }
}