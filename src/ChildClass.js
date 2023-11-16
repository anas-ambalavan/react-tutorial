import React, { Component } from "react";

class Sample extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor child");
  }
  componentDidMount() {
    console.log("ComponentDidMount Child");
  }
  render() {
    console.log("renderChild");
    return <div> Child Component </div>;
  }
}

export default Sample;
