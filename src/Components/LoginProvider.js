import React, { Component } from "react";

const LoginContext = React.createContext();

class LoginProvider extends Component {
  state = {
    name: "bartosz",
    age: 25
  };
  render() {
    return (
      <LoginContext value="i am the value">{this.props.children}</LoginContext>
    );
  }
}

export default LoginProvider;
