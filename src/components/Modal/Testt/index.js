import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

class Testt extends Component {
  state = {
    archivosRestantes: 0,
    porcentaje: 0.0,
  }

  simular = async () => {
    await this.setState({ archivosRestantes: 8 })
    const archivosTotales = this.state.archivosRestantes
    var porcentajeUnitario = 100 / this.state.archivosRestantes
    const self = this
    for (let i = 0; i < this.state.archivosRestantes; i++) {
      await setTimeout(function timer() {
        self.setState({
          porcentaje: self.state.porcentaje + porcentajeUnitario,
          archivosRestantes: self.state.archivosRestantes - 1,
        })

        if (i === archivosTotales - 1) {
          self.setState({ porcentaje: 0.0 })
        }
      }, 200 * i)
    }
  }

  render() {
    return (
      <div className="Testt">
        <button className="btn btn-success" onClick={() => this.simular()}>
          Simular
        </button>
        <h1>{this.state.porcentaje}</h1>
        <ProgressBar now={this.state.porcentaje} />
      </div>
    )
  }
}

export default Testt
