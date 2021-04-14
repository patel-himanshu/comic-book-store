import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./bootstrap.min.css";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ComicPage from "./pages/ComicPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <div className="main container">
          <Route exact path="/" component={HomePage} />
          <Route path="/comic/:id" component={ComicPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
        </div>
        {/* <Footer /> */}
      </HashRouter>
    </Provider>
  );
}

export default App;
