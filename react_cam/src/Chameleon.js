import React, { Component } from "react";

class Chameleon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Chameleon">
        <h1>I am a Chameleon</h1>
        <button>Red</button>
        <button>Green</button>
        <button>Blue</button>
      </div>
    );
  }
}

export default Chameleon;
