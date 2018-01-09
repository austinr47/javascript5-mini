import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars=this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const carList = this.state.cars.map(index => <ul>{index.make}</ul>)
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {/* {this.state.cars} */}
        {carList}
      </div>
    );
  }
}

export default App;
