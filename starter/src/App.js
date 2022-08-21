import "./App.css";
import { MyBooks, BookSearch } from "./components";
import {Route, Routes} from "react-router-dom";
import {ROUTE_URLS} from "./logic/constants";

const App = () => (
    <div className="app">
      <Routes>
        <Route exact path={ROUTE_URLS.HOME} element={<MyBooks/>}/>
        <Route exact path={ROUTE_URLS.SEARCH} element={<BookSearch/>}/>
      </Routes>
    </div>
);


export default App;
