import React from 'react';



class App extends React.Component { //every class component needs to be capital ex : React.Component
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    submitted: false
  }
  
  handleSubmit = () => {
    this.setState({ submitted: true }) 
    
  }

  setName = event => { //set a method equal to a function, arrow function disbindes auto

    console.log(event.target.value) //this is how you grab user input
    this.setState({ //change state like this
      name: event.target.value
    })

  }

  setEmail = event => {
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }


  setPhoneNumber = event => {
    console.log(event.target.value)
    this.setState({
      phoneNumber: event.target.value
    })
  }


  render() {

    return (
      <div className="App">
      <h2>Social profile</h2> 
      {!this.state.submitted && <div>
      <p>An app for your Social Media profiles</p>
      <input onChange={this.setName}  style={{"display": "block"}} placeholder="Name" />
      <input onChange={this.setEmail} style={{"display": "block"}} placeholder="Email" />
      <input onChange={this.setPhoneNumber} style={{"display": "block"}} placeholder="Phone Number" />
      <button onClick={this.handleSubmit}>Submit</button>
     
     </div>}
      {this.state.submitted && 
      
      <div>               
      
            {"Your name is: " + this.state.name}
            <br />
            
            {"Your email is: " + this.state.email}
            <br />
      
            {"Your Phone Number is: " + this.state.phoneNumber}
            
      </div>}
      
    </div>

    );
  }
}

export default App;
