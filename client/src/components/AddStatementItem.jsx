import React, { Component } from "react";

class AddStatementItem extends Component {
 constructor() {
   super();
   this.state = {
     statement: ""
   };
 }


 addStatement = async text => {
    const trustStatement= {
        text: text
    };
    const response = await fetch(`/api/statements`, {
        method: "POST",
        body: JSON.stringify(trustStatement),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });
    const statements = await response.json();
    this.setState({ statements });
};

 handleChange = event => {
   this.setState({ value: event.target.value });
   console.log(this.state.value);
 };

 handleSubmit = () => {
   this.addStatement(this.state.value);
   console.log("11111111");
 };

 render() {
   return (
     <form onSubmit={this.handleSubmit} className="StatementTestArea">
       <textarea onChange={this.handleChange}>
         here is our text area for trust statement
       </textarea>
       <div>
         <input type="submit" value="Submit" />
       </div>
     </form>
   );
 }
}

export default AddStatementItem;