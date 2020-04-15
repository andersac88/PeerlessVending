import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar/"
import Footer from "./components/Footer/"
import Containers from "./components/Containers"
import Map from "./components/Map"
import axios from "axios"

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
    
    handleFormSubmit = async(event) => {
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
        <Containers side2="Peerless Vending is a family owned vending company based in Yorkville, Illinois that focuses on providing business owners with high quality bulk vending machines for their employees and customers convenience." />
        <Containers side1="Our services do not cost the business any money, as we place the machine, service and clean the machine, and fill the machine with the product. We offer a wide variety of candies for our machines at the request of the business or the customers of that business." />
        <Map side1="Providing and servicing vending machines around the Chicagoland area" />
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;

