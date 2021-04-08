import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./bootstrap.min.css";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ComicPage from "./pages/ComicPage";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <div className="main container">
          <Route exact path="/" component={HomePage} />
          <Route path="/comic/:id" component={ComicPage} />
        </div>
        {/* <Footer /> */}
      </HashRouter>
    </Provider>
  );
}

export default App;
