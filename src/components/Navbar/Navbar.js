import React, { useState } from 'react'
import './Navbar.css'
import Dropdown from '../Dropdown/Dropdown'
import Liteflix from '../../assets/svg/liteflix.svg'
import svgPlus from '../../assets/svg/plus.svg'
import svgBell from '../../assets/svg/bell.svg'
import Modal from '../../components/Modal/Modal'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <nav className="navbar-expand-lg navbar-wrap navbar-mobile">
        <div className="d-flex align-items-center">
          <div class="d-flex align-items-end">
            <img className="mr-2" src={Liteflix} alt="logo" />
            <ul className="navbar-nav">
              <li className="nav-item active-link">
                <a className="nav-link navbar-letter" href="/">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-letter" href="/">
                  Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-letter" href="/">
                  Peliculas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-letter" href="/">
                  Agregados recientemente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-letter" href="/">
                  Mi lista
                </a>
              </li>
            </ul>
          </div>
          <div class="circle-add-list" onClick={() => setShowModal(true)}>
            <img src={svgPlus} alt="add" />
            <div class="add-movie-btn">Agregar pelicula</div>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <div class="d-flex align-items-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link navbar-letter" href="/">
                  Ni??os <span className="sr-only">(current)</span>
                </a>
              </li>
              <img src={svgBell} alt="notifications" class="mr-2 ml-2" />
            </ul>
          </div>
          <Dropdown />
        </div>
      </nav>
    </div>
  )
}
export default Navbar
