import React, { Component } from "react";
import { fireBaseApp } from "../base";
export const LoginContext = React.createContext();

class LoginProvider extends Component {
  state = {
    loginState: null
  };

  componentWillMount = () => {
    fireBaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loginState: user });
      }
    });
  };

  render() {
    return (
      <LoginContext.Provider
        value={{
          state: this.state.loginState
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
