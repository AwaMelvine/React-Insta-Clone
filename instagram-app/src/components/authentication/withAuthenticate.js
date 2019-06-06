import React from "react";

const withAuthenticate = Component => Login => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      const loggedIn = !!localStorage.getItem("username");
      this.setState({
        loggedIn
      });
    }
    render() {
      if (this.state.loggedIn) {
        return <Component loggedIn={this.state.loggedIn} {...this.props} />;
      }
      return <Login />
    }
  };
};

export default withAuthenticate;
