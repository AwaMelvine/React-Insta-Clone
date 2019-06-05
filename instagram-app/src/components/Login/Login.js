import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        username: "",
        password: ""
      },
      message: "",
      msgClass: ""
    };
  }
  handleChage = event =>
    this.setState({ ...this.state, [event.target.name]: event.target.value });

  login = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === "Awa" && password === "melvine") {
      await localStorage.setItem("username", username);
      await this.setState({
        ...this.state,
        message: "Login Success!!! Redirecting...",
        msgClass: "success"
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      this.setState({
        ...this.state,
        message: "Wrong credentials",
        msgClass: "failure"
      });
    }
  };

  render() {
    const { username, password, message, msgClass } = this.state;
    return (
      <form onSubmit={event => this.login(event)}>
        <p className={msgClass}>{message}</p>
        <input
          type="text"
          name="username"
          value={username}
          onChange={event => this.handleChage(event)}
          className="txt-input username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => this.handleChage(event)}
          className="txt-input password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
