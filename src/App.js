import React, { Component } from "react";
import Contador from "./ContadorSimple";
import CicloDeVida from "./CicloDeVida";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarComponente: true };
  }

  toggleComponente = () => {
    this.setState((prevState) => ({
      mostrarComponente: !prevState.mostrarComponente,
    }));
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <div className="flex space-x-4">
          <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
            <Contador />
          </div>

          <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
            <button
              onClick={this.toggleComponente}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              {this.state.mostrarComponente
                ? "Ocultar Componente"
                : "Mostrar Componente"}
            </button>
            {this.state.mostrarComponente && <CicloDeVida />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
