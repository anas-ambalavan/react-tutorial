import React from "react";
import { Link } from "react-router-dom";
// import Sample from "./Sample";

class UserClass extends React.Component {
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

  componentWillUnmount() {
    console.log("Component unmounted from class");
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
        <Link to={"/"}>Home</Link>
        {/* <Sample /> */}
      </div>
    );
  }
}

export default UserClass;

// constructor
// componentDidMount
// componentDidUpdate
// componentWillUnmount

//props drilling
