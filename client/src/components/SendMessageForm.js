import React, { Component } from "react";

export default class SendMessageForm extends Component {
  state = {
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: e.target.value });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  render() {
    return (
      <div className="container-SendMessageForm">
        <div>
          <form onSubmit={this.onSubmit} className="form">
            <input
              onChange={this.onChange}
              type="text"
              placeholder="Enter a message..."
              value={this.state.text}
              className="input"
            />
          </form>
        </div>
      </div>
    );
  }
}
