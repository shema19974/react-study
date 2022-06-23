import React, { Component } from "react";
import Form from "./common/form";
const Joi = require("joi-browser");

class RegisterUser extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(30),
  };


  submitForm = () => {
    console.log("Submitted successfully");
  };

  render() {
    return (
      <div>
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput({ name: "name", label: "Name" })}
          {this.renderInput({ name: "email", label: "Email" })}
          {this.renderInput({
            name: "password",
            label: "Password",
            type: "password",
          })}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterUser;
