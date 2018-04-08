import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='wide' visible={visible} vertical inverted>
            <Link to="/home">
              <Menu.Item name='home'>
                Home
              </Menu.Item>
            </Link>
            <Link to="/calender">
              <Menu.Item name='calender'>
                Calender
              </Menu.Item>
            </Link>
            <Link to="/firstVictory">
              <Menu.Item name='startDay'>
                Start Your Day
              </Menu.Item>
            </Link>
            <Link to="/picOfDay">
              <Menu.Item name='endDay'>
                End Your Day
              </Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item name='about'>
                About / F.A.Q.
              </Menu.Item>
            </Link>
            <Link to="/agelapse">
              <Menu.Item name='agelapse'>
                Agelapse
              </Menu.Item>
            </Link>
            <Menu.Item name='logout'>
              Logout
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideBar
