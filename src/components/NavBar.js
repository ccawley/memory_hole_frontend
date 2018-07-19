import React from 'react'
import { Dropdown, Menu, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function HeaderMenu({ logout }) {
  return (
    <div>
      <Responsive {...Responsive.onlyComputer}>
        <Menu>
          <Link to='/home'>
            <Menu.Item id='logo' header>MemoryHole</Menu.Item>
          </Link>

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
                <Link to="/morning/firstVictory">
                  <Dropdown.Item name='startDay'>
                    Start Your Day
                  </Dropdown.Item>
                </Link>
                <Link to="/evening/picOfTheDay">
                  <Dropdown.Item name='endDay'>
                    End Your Day
                  </Dropdown.Item>
                </Link>
                {/* <Link to="/about">
                  <Dropdown.Item name='about'>
                    About / F.A.Q.
                  </Dropdown.Item>
                </Link> */}
                {/* <Link to="/agelapse">
                  <Dropdown.Item name='agelapse'>
                    Agelapse
                  </Dropdown.Item>
                </Link> */}
                <Dropdown.Item name='logout' onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Responsive>

      <Responsive {...Responsive.onlyTablet}>
        <Menu>
          <Link to='/home'>
            <Menu.Item id='logo' header>MemoryHole</Menu.Item>
          </Link>

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
                <Link to="/morning/firstVictory">
                  <Dropdown.Item name='startDay'>
                    Start Your Day
                  </Dropdown.Item>
                </Link>
                <Link to="/evening/picOfTheDay">
                  <Dropdown.Item name='endDay'>
                    End Your Day
                  </Dropdown.Item>
                </Link>
                {/* <Link to="/about">
                  <Dropdown.Item name='about'>
                    About / F.A.Q.
                  </Dropdown.Item>
                </Link> */}
                {/* <Link to="/agelapse">
                  <Dropdown.Item name='agelapse'>
                    Agelapse
                  </Dropdown.Item>
                </Link> */}
                <Dropdown.Item name='logout' onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Responsive>

      <Responsive {...Responsive.onlyMobile}>
        <Menu>
          <Link to='/home'>
            <Menu.Item id='logo' header>MemoryHole</Menu.Item>
          </Link>

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
                <Link to="/morning/firstVictory">
                  <Dropdown.Item name='startDay'>
                    Start Your Day
                  </Dropdown.Item>
                </Link>
                <Link to="/evening/picOfTheDay">
                  <Dropdown.Item name='endDay'>
                    End Your Day
                  </Dropdown.Item>
                </Link>
                {/* <Link to="/about">
                  <Dropdown.Item name='about'>
                    About / F.A.Q.
                  </Dropdown.Item>
                </Link> */}
                {/* <Link to="/agelapse">
                  <Dropdown.Item name='agelapse'>
                    Agelapse
                  </Dropdown.Item>
                </Link> */}
                <Dropdown.Item name='logout' onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Responsive>
    </div>
  )
}

export default HeaderMenu
