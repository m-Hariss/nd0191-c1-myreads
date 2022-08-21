// Constants

import * as PropTypes from "prop-types";

export const BOOK_SHELF_OPTIONS = [
    {label: 'Currently Reading', value: 'currentlyReading'},
    {label: 'Want to Read', value: 'wantToRead'},
    {label: 'Read', value: 'read'},
    {label: 'None', value: 'none'},
];

export const SHELF_LABEL = {
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read',
    'read': 'Read',
    'none': 'None',
}



// Props Classes

export const BOOK_CLASS = {
    authors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,

    imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }).isRequired
};


// Route URLS

export const ROUTE_URLS = {
    HOME: '/',
    SEARCH: '/search',
}
