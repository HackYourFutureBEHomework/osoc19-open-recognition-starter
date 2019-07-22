import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

export default class SignInOut extends Component {
  signOut = () => {
    localStorage.removeItem("id");
    return <Redirect to="/" />;
  };

// <<<<<<< HEAD
//   render() {
//     return localStorage.getItem("id") ? (
//       <Button variant="outline-primary" onClick={this.signOut}>
//         Sign-out
//       </Button>
//     ) : (
//       <Button variant="outline-primary" onClick={this.signIn}>
//         Sign-in
//       </Button>
//     );
//   }
// }
// =======

    

     signOut =() => {
         localStorage.removeItem('id')
     }
    

    render(){
        return(
            localStorage.getItem("id") ? 
            <Link to='/'>
            <Button variant="outline-primary" onClick = {this.signOut}>Sign-out</Button> 
            </Link>
            : 
            <Link to='/signin'>
            <Button variant="outline-primary" onClick = {this.signIn}>Sign-in</Button>  
            </Link>          
        )
    }
}
