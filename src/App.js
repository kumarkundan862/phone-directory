import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          phone directory
        </div>
        <button>Add</button>
        <div>
          <span>name</span><br />
          <span>phone</span>
        </div> */}
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" placeholder="type here" defaultValue="kundan"/>
      </div>
    );
  }
}

export default App;