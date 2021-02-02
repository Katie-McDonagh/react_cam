import React, { Component } from "react";
import TextComp from "./TextComp";

class Chameleon extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };

    // state is a color - red by default
  }

  changeColor = (event) => {
    // on click of button with id of color change the sate to that color
    this.setState({ color: event.target.value });
  };

  // change color - set state to green or blue or red and is set off when
  // there is an event handler onclick of one of the buttons

  render() {
    return (
      <div className="Chameleon">
        <TextComp color={this.state.color} />
        <button value="red" onClick={this.changeColor}>
          Red
        </button>
        <button value="green" onClick={this.changeColor}>
          Green
        </button>
        <button value="blue" onClick={this.changeColor}>
          Blue
        </button>
      </div>
    );
  }
}

export default Chameleon;
