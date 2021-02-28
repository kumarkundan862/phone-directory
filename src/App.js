import React, { Component } from 'react';
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    let demoArray = [
      {
         id: 101, // unique
         prop1: "Kundan",
         prop2: "8888888888"
      },
      {
         id: 102, // unique
         prop1: "Shubham",
         prop2: "9999999999"
      }
   ];
    return (
      <div>
        <Header heading="phone directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            demoArray.map(sub =>{
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.prop1}</span>
                <span className="grid-item">{sub.prop2}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
                </div>
            })
          }

        </div>
      </div>


    );
  }
}

export default App;