import React, { Component } from "react";

class UsernameForm extends Component {
  state = {
    username: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  onChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="userform-style">
        <h2 className="userform-headingText">What is your username?</h2>
        <div className="input-group mb-3">
          <form className="input-group-append" onSubmit={this.onSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Your username..."
              onChange={this.onChange}
            />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
