import React from "react";
import UsernameForm from "./components/UsernameForm";
import ChatScreen from "./ChatScreen";

class App extends React.Component {
  state = {
    currentUsername: "",
    currentScreen: "WhatIsYourUsernameScreen"
  };

  onUsernameSubmitted = username => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: "ChatScreen"
        });
      })
      .catch(error => console.error("error", error));
  };

  render() {
    let { currentScreen, currentUsername } = this.state;

    if (currentScreen === "WhatIsYourUsernameScreen")
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />;

    if (currentScreen === "ChatScreen") {
      return <ChatScreen currentUsername={currentUsername} />;
    }
  }
}

export default App;
