import React, { Component } from "react";
import Input from "./input";
const Joi = require("joi-browser");

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    // if (this.state.account.username.trim() === "")
    //   errors.username = "Username is required";

    // if (this.state.account.password.trim() === "")
    //   errors.password = "Password is required";

    // if (!errors) return;
    // return Object.keys(errors).length !== 0 ? errors : null;
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return;
    for (let item of error.details) errors[item.path] = item.message;
    return Object.keys(errors).length !== 0 ? errors : "";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (!errors) {
      this.submitForm();
    }
    this.setState({ errors: errors || {} });
  };

  validateProperty = ({ name, value }) => {
    // const errors = {};
    // if (input.name === "username") {
    //   if (input.value.trim() === "") errors.username = "Username is required";
    // }
    // if (input.name === "password") {
    //   if (input.value.trim() === "") errors.password = "Password is required";
    // }
    // if (!errors) return;
    // return Object.keys(errors).length !== 0 ? errors : "";

    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);
    if (!error) return;
    return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const data = { ...this.state.data };
    const errorMessage = this.validateProperty(input);
    if (!errorMessage) delete errors[input.name];
    errors[input.name] = errorMessage;
    // console.log(errors)

    data[input.name] = input.value;

    this.setState({ data: data, errors: errors });
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary mt-2">
        {label}
      </button>
    );
  };

  renderInput = ({ name, label, type = "text" }) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
