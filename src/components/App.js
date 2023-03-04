import React from "react";
import "../styles/App.css";
class App extends React.Component {
  state = {
    textInput: "",
    numInput: "",
  };

 handleInput = (event) => {
  const { id, value } = event.target;

  if (id === "text-input") {
    this.setState((prevState) => {
      console.log(`Input in #text-input is ${prevState.textInput + value}`);
      return {
        textInput: prevState.textInput + value,
      };
    });
  } else if (id === "num-input") {
    this.setState((prevState) => {
      const newNumInput = parseInt(prevState.numInput.toString() + value);
      console.log(`Input in #num-input is ${newNumInput}`);
      return {
        numInput: newNumInput,
      };
    });
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

