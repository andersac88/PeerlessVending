import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/"
import Footer from "./components/Footer/"
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

