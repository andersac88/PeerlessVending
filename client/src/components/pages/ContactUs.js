import React, {Component} from 'react';
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
  
  handleFormSubmit = async(event) => {
    event.preventDefault();
    axios.post("/api/contact", this.state)
    .then(res =>{
      console.log(res);
      this.setState({ name: '', email: '', message: ''})
    });
  }

render() {
 return(
   <div className="App">
   <form id="contact-form" >
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="text" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleInputChange} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <input name="message" type="text" className="form-control" rows="5" value={this.state.message} onChange={this.handleInputChange} />
    </div>
    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
 );
}


}

export default App;