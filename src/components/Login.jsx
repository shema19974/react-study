import React, { Component } from "react";
import Form from "./common/form";
const Joi = require("joi-browser");

class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  
  submitForm = () => {
    console.log("Submitted successfully");
  };

  render() {
    return (
      <div>
        <h3>Login Form</h3>
        <form action="POST" onSubmit={this.handleSubmit}>
          {this.renderInput({ name: "username", label: "Username" })}
          {this.renderInput({ name: "password", label: "Password", type: "password" })}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
