import PropTypes from 'prop-types';


const bookShelfOptions = [
    {label: 'Currently Reading', value: 'currentlyReading'},
    {label: 'Want to Read', value: 'wantToRead'},
    {label: 'Read', value: 'read'},
    {label: 'None', value: 'none'},
]

const BookShelves = () => (
    <div className="book-shelf-changer">
        <select>
            <option value="none" disabled>
            Move to...
            </option>
            {
                bookShelfOptions.map(({label, value}) => (
                    <option value={value}>
                        {label}
                    </option>
                ))
            }
        </select>
    </div>
);

const Book = ({thumbnail, name, writerName}) => {
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
              <BookShelves/>
            </div>
            <div className="book-title">{name}</div>
            <div className="book-authors">{writerName}</div>
          </div>
    );
}

Book.propTypes = {
    name: PropTypes.string.isRequired,
    writerName: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
}

export default Book;
