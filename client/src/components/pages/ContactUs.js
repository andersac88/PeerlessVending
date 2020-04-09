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
  
  handleFormSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(this.state)
    this.emailFront(this.state);
  }
  
emailFront = (info) => {
  console.log(info)
  axios.post("/api/contact", info)
  .then(res => console.log(res));
}

render() {
 return(
   <div className="App">
   <form id="contact-form" >
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleInputChange} />
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