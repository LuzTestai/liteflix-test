import React, { useState } from 'react'
import './Dropdown.css'
import svgUser from '../../assets/svg/user.svg'
import svgArrow from '../../assets/svg/arrow.svg'
import svgUserActive from '../../assets/svg/user-active.svg'
import svgUserDisabled from '../../assets/svg/user-disabled.svg'

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false)
  const dropdownShow = () => {
    setDropdown(!dropdown)
  }
  return (
    <div class="dropdown-wrap" onClick={dropdownShow}>
      <div class="d-flex">
        <img src={svgUser} alt="user" />
        <img src={svgArrow} alt="arrow" class="mr-2 ml-2" />
      </div>
      {dropdown ? (
        <div>
          <div class="triangle-white" />
          <div class="menu">
            <div class="container-user active">
              <img src={svgUserActive} alt="user-active" />
              <p class="user-name active-text">Ernesto Gonazales</p>
            </div>
            <div class="container-user">
              <img src={svgUserDisabled} alt="user-disabled" />
              <p class="user-name disabled">User 03</p>
            </div>
            <div class="container-user">
              <img src={svgUserDisabled} alt="user-disabled" />
              <p class="user-name disabled">User 04</p>
            </div>
            <div class="container-options">
              <p>configuración</p>
            </div>
            <div class="container-options">
              <p>ayuda</p>
            </div>
            <div class="container-options container-options-strong">
              <p>logout</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default Dropdown
