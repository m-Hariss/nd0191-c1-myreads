import PropTypes from 'prop-types';


const BookSearch = props => (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => props.setShowSearchPage(!props.showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
);


BookSearch.prototype = {
    showSearchPage: PropTypes.bool.isRequired,

    setShowSearchPage: PropTypes.func.isRequired,
}

export default BookSearch;
