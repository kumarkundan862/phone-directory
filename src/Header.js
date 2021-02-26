//import React, { Component } from 'react'; //here the Component class is added for class component
import React from 'react';
import './Header.css';

//this is functional component
const Header = function(){

    // const headerStyle = {
    //     textAlign: 'center',
    //     padding: 20,
    //     background: '#000',
    //     color: '#fff',
    //     textTransform: 'uppercase'
    //  };
     
    return(
        <div className="header">
          phone directory
        </div>
    )
}

export default Header;

//the functional component can be written in class component as well as shown below
// class Header extends Component {
//     reder(){
//         return(
//             <div className="header">
//               phone directory
//             </div>
//         )
//     }
// }
//
//export default Header;

