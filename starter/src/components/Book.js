import PropTypes from 'prop-types';
import { BOOK_CLASS, BOOK_SHELF_OPTIONS } from "../logic/constants";


const BookShelves = ({selectedShelf, updateShelf}) => {
    const shelves = selectedShelf === 'none' ?
        BOOK_SHELF_OPTIONS.filter(shelf => shelf.value !== 'none') : BOOK_SHELF_OPTIONS;
    return (
        <div className="book-shelf-changer">
            <select value={selectedShelf} onChange={event => updateShelf(event.target.value)}>
                <option value="none" disabled>
                    Move to...
                </option>
                {
                    shelves.map(({label, value}) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                    ))
                }
            </select>
        </div>
    );
}

BookShelves.propTypes = {
    selectedShelf: PropTypes.string.isRequired,

    updateShelf: PropTypes.func.isRequired
}

const Book = ({book, updateShelf}) => {
    const {authors, title, shelf, imageLinks} = book;

    return (
        <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${imageLinks?.thumbnail})`,
                }}
              ></div>
              <BookShelves selectedShelf={shelf} updateShelf={updateShelf}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {authors?.join(', ')}
            </div>
          </div>
    );
}

Book.propTypes = {
    updateShelf: PropTypes.func.isRequired,

    book: PropTypes.shape(BOOK_CLASS).isRequired
}

export default Book;
