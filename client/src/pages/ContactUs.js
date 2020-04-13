import React, {Component} from 'react';
import axios from "axios";
import {Input, TextArea, FormButton} from "../components/Form"

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
    console.log(event);
    console.log(this.state)
    axios.post("/api/contact", this.state)
    .then(res =>{
      console.log(res)
      this.setState({ name: '', email: '', message: ''})
    }).catch(err => console.log(err));
  }

render() {
 return(
   <div className="Row">
     <div className="col-sm-6">
   <form > <h1>Contact Us</h1>
     <Input 
               name="name" 
               placeholder="Name" 
               value={this.state.name} 
               onChange={this.handleInputChange}/>
     <Input 
                name="email" 
                placeholder="E-mail" 
                value={this.state.email} 
                onChange={this.handleInputChange}/>
     <TextArea 
                name="message" 
                placeholder="Type message here..." 
                value={this.state.message} 
                onChange={this.handleInputChange}/>
     <FormButton
                disabled={!(this.state.name && this.state.email && this.state.message)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormButton>
    </form>
    </div>
    <div className="col-sm"></div> 
    </div>
 );
}
}

export default App;