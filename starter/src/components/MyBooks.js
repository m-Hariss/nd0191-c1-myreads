import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

import {getAll} from "../api";
import {listToObjectByKeyValue} from "../logic/utils";
import {SHELF_LABEL} from "../logic/constants";
import Book from "./Book";


const MyBooks = props => {
    const [books, setBooks] = useState({});

    useEffect(() => {
        getAll().then(allBooks => setBooks(listToObjectByKeyValue(allBooks, 'shelf')));
    }, []);

    return (
        <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {Object.keys(books).map(shelf => (
                      <div className="bookshelf">
                          <h2 className="bookshelf-title">{SHELF_LABEL[shelf]}</h2>
                          <div className="bookshelf-books">
                              <ol className="books-grid">
                              {books[shelf].map(book => (
                                   <li>
                                    <Book book={book}/>
                                   </li>
                                  )
                              )}
                             </ol>
                          </div>
                      </div>)
                    )}
                  </div>
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => props.setShowSearchPage(!props.showSearchPage)}>Add a book</a>
              </div>
        </div>
    );
}

MyBooks.prototype = {
    showSearchPage: PropTypes.bool.isRequired,

    setShowSearchPage: PropTypes.func.isRequired,
}

export default MyBooks;
