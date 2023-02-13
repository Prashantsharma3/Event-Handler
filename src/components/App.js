import React from "react";
import "../styles/App.css";
class App extends React.Component {
  state = {
    textInput: "",
    numInput: "",
  };

  handleInput = (event) => {
    if (event.target.id === "text-input") {
      this.setState({
        textInput: this.state.textInput + event.target.value,
      });
      console.log(
        `Input in #text-input is ${this.state.textInput + event.target.value}`
      );
    } else if (event.target.id === "num-input") {
      this.setState({
        numInput: parseInt(this.state.numInput + event.target.value),
      });
      console.log(
        `Input in #num-input is ${parseInt(
          this.state.numInput + event.target.value
        )}`
      );
    }
  };

  render() {
    return (
      <div>
        <input id="text-input" onInput={this.handleInput} />
        <input id="num-input" onInput={this.handleInput} />
      </div>
    );
  }
}
export default App;

