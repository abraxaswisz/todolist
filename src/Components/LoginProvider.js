import React, { Component } from "react";
import { fireBaseApp } from "../base";
export const LoginContext = React.createContext();

class LoginProvider extends Component {
  state = {
    loginState: null
  };

  login = (email, password) => {
    fireBaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        fireBaseApp
          .auth()
          .onAuthStateChanged(
            user =>
              user
                ? this.setState({ loginState: user })
                : this.setState({ loginState: null })
          )
      )
      .catch(err => console.log(err));
  };

  logOut = () => {
    fireBaseApp
      .auth()
      .signOut()
      .then(() => this.setState({ loginState: null }));
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
