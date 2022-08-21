import PropTypes from 'prop-types';
import { BOOK_CLASS, BOOK_SHELF_OPTIONS } from "../logic/constants";


const BookShelves = ({selectedShelf}) => (
    <div className="book-shelf-changer">
        <select value={selectedShelf}>
            <option value="none" disabled>
            Move to...
            </option>
            {
                BOOK_SHELF_OPTIONS.map(({label, value}) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))
            }
        </select>
    </div>
);

BookShelves.propTypes = {
    selectedShelf: PropTypes.string.isRequired
}

const Book = ({book}) => {
    const {authors, title, shelf, imageLinks} = book;
    const { thumbnail } = imageLinks;

    return (
        <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${thumbnail})`,
                }}
              ></div>
              <BookShelves selectedShelf={shelf}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {authors.join(', ')}
            </div>
          </div>
    );
}

Book.propTypes = {
    book: PropTypes.shape(BOOK_CLASS).isRequired
}

export default Book;
