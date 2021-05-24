import React, { useEffect, useState } from 'react'
import './index.css'
import { ProgressBar } from 'react-bootstrap'

const ComponentProgressBar = ({ setShowProgressBar }) => {
  const [archivosRestantes, setArchivosRestantes] = useState(0)
  const [porcentaje, setProcentaje] = useState(0.0)

  useEffect(() => {
    const simular = () => {
      setArchivosRestantes(100)
      for (let i = 0; i < 100; i++) {
        console.log('hola')
        console.log('porcentaje', porcentaje)
        setTimeout(function timer() {
          setArchivosRestantes(100 - 1)
          setProcentaje(porcentaje + (i + 1))
        }, 10 * i)
      }
      console.log('termine', archivosRestantes)
    }
    simular()
  }, [])

  console.log('porcentaje', porcentaje)

  return (
    <div
      className="container-progress-bar"
      onClick={() => setShowProgressBar(false)}
    >
      <p className="title-loading"> cargando {porcentaje}%</p>

      <ProgressBar className="progress-bar-add" now={porcentaje} />
      <p className="title-cancel">Cancelar</p>
    </div>
  )
}

export default ComponentProgressBar
