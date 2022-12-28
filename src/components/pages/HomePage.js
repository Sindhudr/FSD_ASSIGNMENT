import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ImageList from '../pages/ImageList'
import $ from 'jquery'; 
import { useState, useEffect } from 'react';

  

//   const constructor = (props) => {
//     super(props);
//     this.state = {
//       person: []
//     };
//   }

//   const userList = () => {
//     return $.getJSON('https://randomuser.me/api/')
//     .then(function(data) {
//       return data.results;
//     });
//   }
// export default function HomePage() {
//    userList.then(function(res){
//     this.state = {person: res};
//     });
//     return (
//         <div className="text-center">
//             {/* <h1 className="main-title home-page-title">welcome to our app</h1>
//             <Link to="/">
//                 <button className="primary-button">Log out</button>
//             </Link> */}
            
//             <div>
//             <ImageList imageData={data} handleClickImage= {activeState} />
//       </div>
//         </div>
//     )
// }



export default class HomePage extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
    this.UserList();
  }
   activeState(data) {
    var newWindow =  window.open("/breed-details");
    newWindow.breedName = data
  }
  UserList() {
    $.getJSON("https://dog.ceo/api/breeds/list/all", (data) => {
      if(data.message) {
        this.setState({ person: [data.message] });
      }
    }
    );
  }

  render() {
        return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Breeds List Screen</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
           {this.state.person && this.state.person.length > 0? (
           
             <div>
            <ImageList imageData={this.state.person[0]} handleClickImage= {this.activeState} />
      </div>) : ""
           }
            {/* { 
            alert(this.state.person && this.state.person.length > 0 ? this.state.person[0] : "")} */}
        </div>
    )
  }
}