import "./App.css";
import { useState } from "react";
import { MyBooks, BookSearch } from "./components";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
          <BookSearch
              setShowSearchPage={setShowSearchpage}
              showSearchPage={showSearchPage}
          />
      ) : (
          <MyBooks
              setShowSearchPage={setShowSearchpage}
              showSearchPage={showSearchPage}
          />
      )}
    </div>
  );
}

export default App;
