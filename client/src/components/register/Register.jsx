import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      login: "",
      email: "",
      password: "",
      city: "",
      country: "",
      profession: "",
      employment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm = () => {
    return (
      this.state.first_name.length > 2 &&
      this.state.last_name.length >2 &&
      this.state.login.length > 0 && 
      this.state.password.length > 5 && 
      this.state.email.length > 3 &&
      this.state.city.length > 1 &&
      this.state.country.length > 1 &&
      this.state.employment.length > 1 &&
      this.state.profession.length > 1
      );
  };

  handleSubmit = () => {
    const data = this.state
    console.log(data)
    fetch('http://localhost:3000/users/', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res=> console.log("A new user added"))
    .catch(error => console.log("Error:", error))
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="form-outline">
        <Form>
          <Form.Row>
            <Form.Group 
            as={Col} 
            controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
              name="first_name"
              type="string" 
              placeholder="" 
              onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="last_name"
                type="string" 
                placeholder="" 
                onChange={this.handleChange}
                />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Login</Form.Label>
              <Form.Control 
                name="login"
                type="string" 
                placeholder="Choose a username" 
                onChange={this.handleChange}
                />
            </Form.Group>

          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                name="email"
                type="email" 
                placeholder="" 
                onChange={this.handleChange}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                name="password"
                type="password" 
                placeholder="Minimum 5 characters" 
                onChange={this.handleChange}
                />
            </Form.Group>
          </Form.Row>

          {/* <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Confirm Email</Form.Label>
              <Form.Control type="email" placeholder="Confirm your email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
              />
            </Form.Group>
          </Form.Row> */}

          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Prfofession</Form.Label>
              <Form.Control 
                name="profession"
                type="string" 
                placeholder="" 
                onChange={this.handleChange}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Employment</Form.Label>
              <Form.Control 
                name="employment"
                type="string" 
                placeholder="Your company or institute" 
                onChange={this.handleChange}
                />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="string"
                name="city"
                onChange={this.handleChange}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="string" 
                name="country"
                onChange={this.handleChange}
                />
            </Form.Group>
          </Form.Row>

          <Button 
          variant="outline-primary"
          onClick={this.handleSubmit}
          disabled={!this.validateForm()}>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}