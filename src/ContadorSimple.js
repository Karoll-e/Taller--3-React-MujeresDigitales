import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementarContador = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  render() {
    return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold mb-6">
          Contador: {this.state.contador}
        </h1>
        <button
          onClick={this.incrementarContador}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Incrementar
        </button>
      </div>
    );
  }
}

export default Contador;
