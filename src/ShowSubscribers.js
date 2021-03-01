import React, { Component } from 'react';
import Header from "./Header";
import "./ShowSubscribers.css";


// let demoArray = [
//   {
//      id: 101, // unique
//      prop1: "Kundan",
//      prop2: "8888888888"
//   },
//   {
//      id: 102, // unique
//      prop1: "Shubham",
//      prop2: "9999999999"
//   }
// ];

class ShowSubscribers extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     subscriberListToShow: []
  //   }
  //   console.log("constructor called");
  // }

  // componentDidMount(){
  //   let newSubscriber = {
  //     id: 1,
  //     name:"kundan",
  //     phone:"9999999999"
  //   }

  //   let subscriberList = this.state.subscriberListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscriberListToShow:subscriberList});
  //   console.log("Component Did Mount called");
  //   console.log("State",this.state);
  // }

  render() {
    console.log("Rendered called");
    return (
      <div>
        <Header heading="phone directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            //demoArray.map(sub =>{
            //this.state.subscriberListToShow.map(sub => {
              this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
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

export default ShowSubscribers;