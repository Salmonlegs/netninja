import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Spyro', age: 16, belt: 'White', id: 1},
      {name: 'LuKang', age: 40, belt: 'Black', id: 2},
      {name: 'Goro', age: 142, belt: 'N/A', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App