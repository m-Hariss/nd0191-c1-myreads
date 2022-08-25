import {Link} from "react-router-dom";
import {ROUTE_URLS} from "../logic/constants";
import {getAll, search, update} from "../api";
import {useEffect, useState} from "react";
import {cloneDeep, isArray, isEmpty, listToObjectByKeyValue} from "../logic/utils";
import Book from "./Book";


const BookSearch = () => {
    const [books, setBooks] = useState([]);
    const [myBooks, setMyBooks] = useState({});

    useEffect(() => {
        getAll().then(allBooks => setMyBooks(listToObjectByKeyValue(allBooks, 'id')));
    }, []);


    const searchBooks = searchValue => {
        if (isEmpty(searchValue)) {
            setBooks([]);
            return;
        }

        search(searchValue, 20).then(newBooks => {
            if (isArray(newBooks)) {

                newBooks.forEach(book => {
                    if (!book.shelf) {
                        book.shelf = myBooks[book.id] && myBooks[book.id][0] ? myBooks[book.id][0].shelf : 'none';
                    }
                })

                setBooks(newBooks);
            }
            else {
                setBooks([]);
            }
        });
    };

    const handleShelfUpdate = (book, currShelf) => {
        update(book, currShelf).then(
        () => {
                const updatedBooks = cloneDeep(books);
                const bookIndex = updatedBooks.findIndex(bookItem => bookItem.id === book.id);

                if (bookIndex > -1) {
                    updatedBooks[bookIndex].shelf = currShelf;
                    setBooks(updatedBooks);
                }
            }
        )
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to={ROUTE_URLS.HOME}>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        onChange={(event) => searchBooks(event.target.value)}
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books?.map(book => (
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


export default BookSearch;
