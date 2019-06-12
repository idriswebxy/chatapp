import React, { Component } from "react";

export default class MessageList extends Component {
  render() {
    return (
      <div className="container-MessageList">
        <ul className="ul">
          {this.props.messages.map((message, index) => (
            <li key={index} className="li">
              <div>
                <span className="senderUsername">{message.senderId}</span>{" "}
              </div>
              <p className="message">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
