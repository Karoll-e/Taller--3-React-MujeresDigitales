import React, { Component } from "react";

class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Haz click en el botón",
      isMensajeCambiado: false,
    };
    console.log("Constructor: El componente se está inicializando");
  }

  cambiarMensaje = () => {
    this.setState((prevState) => ({
      mensaje: prevState.isMensajeCambiado
        ? "Haz click en el botón"
        : "Mensaje cambiado",
      isMensajeCambiado: !prevState.isMensajeCambiado,
    }));
  };

  componentDidUpdate() {
    console.log("Componente actualizado");
  }

  componentWillUnmount() {
    console.log("Componente va a desaparecer");
  }

  render() {
    return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {this.state.mensaje}
        </h1>
        <button
          onClick={this.cambiarMensaje}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Cambiar mensaje
        </button>
      </div>
    );
  }
}

export default CicloDeVida;
