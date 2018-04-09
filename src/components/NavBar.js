import React from 'react'
import { Dropdown, Menu, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function HeaderMenu() {

  return (
    <Responsive {...Responsive.onlyMobile}>
      <Menu color='inverted'>
        <Menu.Item header>MemoryHole</Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item icon='content'>
            <Dropdown.Menu>
              <Link to="/home">
                <Dropdown.Item name='home'>
                  Home
                </Dropdown.Item>
              </Link>
              <Link to="/calender">
                <Dropdown.Item name='calender'>
                  Calender
                </Dropdown.Item>
              </Link>
              <Link to="/firstVictory">
                <Dropdown.Item name='startDay'>
                  Start Your Day
                </Dropdown.Item>
              </Link>
              <Link to="/picOfDay">
                <Dropdown.Item name='endDay'>
                  End Your Day
                </Dropdown.Item>
              </Link>
              <Link to="/about">
                <Dropdown.Item name='about'>
                  About / F.A.Q.
                </Dropdown.Item>
              </Link>
              <Link to="/agelapse">
                <Dropdown.Item name='agelapse'>
                  Agelapse
                </Dropdown.Item>
              </Link>
              <Dropdown.Item name='logout'>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Responsive>
  )
}

export default HeaderMenu
