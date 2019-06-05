import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleChage = event =>
    this.setState({ ...this.state, [event.target.name]: event.target.value });

  login = event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === "Awa" || password === "melvine") {
      localStorage.setItem("isAuthed", true);
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={event => this.login(event)}>
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
