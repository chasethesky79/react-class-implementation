import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    const { target: { value }} = event;
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state;
    return (
      <div class="name-input">
        <h1>My name is : {name}</h1>
        <input type="text" value ={name} onChange = {this.handleChange}/>
      </div>
    )
  }
}

export default App;
