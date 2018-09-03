import React, { Component } from "react";

export const LoginContext = React.createContext();

class LoginProvider extends Component {
  state = {
    name: "bartosz",
    age: 25
  };
  render() {
    return (
      <LoginContext.Provider value="i am the value">
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
