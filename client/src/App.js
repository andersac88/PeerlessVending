import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar/"
import Footer from "./components/Footer/"
import Containers from "./components/Containers"
import Map from "./components/Map"
import axios from "axios"

const top = "Peerless Vending is a family owned vending company based in Yorkville, Illinois that focuses on providing business owners with high quality vending machines for the convenience of ther customers and employees."

const middle = `Our services are free to business owners. We place, service, clean and fill the machine. 

We offer a wide variety of products and are more than willing to meet any of our clients' requests.` 

const bottom = "Providing and servicing vending machines around the Chicagoland area"

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
    
    handleFormSubmit = (event) => {
      event.preventDefault();
      axios.post("/api/contact", this.state)
      .then(res =>{
        this.setState({ name: '', email: '', message: ''})
      }).catch(err => console.log(err));
    }
  
  render() {
   return(
    <Router>
      <div>
        <NavBar contactname={this.state.name} email={this.state.email} message={this.state.message} inputChange={this.handleInputChange} formSubmit={this.handleFormSubmit} />
        <Containers side2={top} />
        <Containers side1={middle} />
        <Map side1={bottom} />
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;

