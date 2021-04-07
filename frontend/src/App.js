import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import "./bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="main container">
        <HomePage />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
