import React from "react";
import Sample from "./Sample";

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor Parent");
    this.state = {
      username: "hello",
      age: null,
      clickCount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("ComponentDidMount Parent");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    console.log("Render Parent");
    return (
      <div>
        <h1>{this.props.username}</h1>
        <button onClick={this.handleClick}>click Me</button>
        <p>{this.state.clickCount}</p>
        <Sample />
      </div>
    );
  }
}

export default User;

// constructor
// componentDidMount
// componentDidUpdate
// componentWillUnmount

//props drilling
