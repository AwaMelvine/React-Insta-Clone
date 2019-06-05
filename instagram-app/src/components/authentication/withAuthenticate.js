import React from "react";

function withAuthenticate(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthed: false
      };
    }
    componentDidMount() {
      const isAuthed = !!localStorage.getItem("isAuthed");
      this.setState({
        isAuthed
      });
    }
    render() {
      return <Component {...this.props} />;
    }
  };
}

export default withAuthenticate;
