import React, { useEffect, useState } from 'react'
import './index.css'
import { ProgressBar } from 'react-bootstrap'

const ComponentProgressBar = ({ showProgressBar }) => {
  const [archivosRestantes, setArchivosRestantes] = useState(0)
  const [porcentaje, setProcentaje] = useState(0.0)
  const [show, setShow] = useState(showProgressBar)

  useEffect(() => {
    const simular = () => {
      setArchivosRestantes(100)
      console.log(
        'archivos restantes adentro de console.log():',
        archivosRestantes,
      )
      // const archivosTotales = 8
      // var porcentajeUnitario = 100 / 8
      for (let i = 0; i < 100; i++) {
        console.log('i', i)
        setTimeout(function timer() {
          setArchivosRestantes(100 - 1)
          setProcentaje(porcentaje + 100)
          // self.setState({
          //   porcentaje: self.state.porcentaje + porcentajeUnitario,
          //   archivosRestantes: self.state.archivosRestantes - 1,
          // })

          // if (i === archivosTotales - 1) {
          //   setProcentaje(0.0)
          // }
        }, 200 * i)
      }
      console.log('termine', archivosRestantes)
    }
    simular()
  }, [])

  return (
    <div className="container-progress-bar">
      {/* <button className="btn btn-success" onClick={() => simular()}>
          Simular
        </button> */}
      <h1 className="title-cancel">Cancelar</h1>
      <ProgressBar className="progress-bar-add" now={porcentaje} />
    </div>
  )
}

export default ComponentProgressBar
