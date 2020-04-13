import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/"
import Footer from "./components/Footer/"
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import axios from "axios";

class App extends Component {
  state = {
      name: '',
      email: '',
      message: ''
    }
    
    handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    };
    
    handleFormSubmit = async() => {
      console.log(this.state)
      axios.post("/api/contact", this.state)
      .then(res =>{
        console.log(res)
        this.setState({ name: '', email: '', message: ''})
      }).catch(err => console.log(err));
    }
  
  render() {
   return(
    <Router>
      <div>
        <NavBar contactname={this.state.name} email={this.state.email} message={this.state.message} inputChange={this.handleInputChange} formSubmit={this.handleFormSubmit} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;

