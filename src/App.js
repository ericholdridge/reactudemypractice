import React, { Component } from "react";
import "./App.css";

import Validation from "../src/Validation/Validation";
import Char from "../src/Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  // Outputs the user text into a paragraph
  outputUserTextHandler = (event) => {
    const userText = event.target.value;
    this.setState({
      userInput: userText,
    });
  };

  // delete a char when user clicks on it
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");

    this.setState({
      userInput: updatedText,
    });
  };

  render() {
    const charlist = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.outputUserTextHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation textLength={this.state.userInput.length} />
        {charlist}
      </div>
    );
  }
}

export default App;
