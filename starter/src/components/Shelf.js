import {BOOK_CLASS} from "../logic/constants";
import Book from "./Book";
import PropTypes from "prop-types";


const Shelf = ({books, shelfName, handleShelfUpdate}) => {

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
              {books.map(book => (
                   <li key={book.id}>
                    <Book book={book} updateShelf={(newShelf) => handleShelfUpdate(book, newShelf)}/>
                   </li>
                  )
              )}
             </ol>
          </div>
        </div>
    );
}


Shelf.propTypes = {
    handleShelfUpdate: PropTypes.func.isRequired,

    shelfName: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape(BOOK_CLASS).isRequired).isRequired
}

export default Shelf;
