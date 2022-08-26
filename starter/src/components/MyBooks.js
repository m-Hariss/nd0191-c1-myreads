import {useEffect, useState} from "react";

import {getAll, update} from "../api";
import {cloneDeep, listToObjectByKeyValue} from "../logic/utils";
import {ROUTE_URLS, SHELF_LABEL} from "../logic/constants";
import {Link} from "react-router-dom";
import Shelf from "./Shelf";


const MyBooks = () => {
    const [books, setBooks] = useState({});

    useEffect(() => {
        getAll().then(allBooks => setBooks(listToObjectByKeyValue(allBooks, 'shelf')));
    }, []);

    const handleShelfUpdate = (book, currShelf) => {
        update(book, currShelf).then(
        () => {
                const booksCopy = cloneDeep(books);
                const prevShelf = book.shelf;

                const bookIndex = booksCopy[prevShelf].findIndex(bookItem => bookItem.id === book.id);
                booksCopy[prevShelf].splice(bookIndex, 1);

                book.shelf = currShelf;
                const shelfBooks = booksCopy[currShelf] || [];
                shelfBooks.push(book);

                setBooks(booksCopy);
            }
        )
    }

    return (
        <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {Object.keys(books).map(shelf => (
                            <Shelf
                                key={shelf}
                                books={books[shelf]}
                                shelfName={SHELF_LABEL[shelf]}
                                handleShelfUpdate={handleShelfUpdate}
                            />
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to={ROUTE_URLS.SEARCH}>Add a book</Link>
              </div>
        </div>
    );
}


export default MyBooks;
