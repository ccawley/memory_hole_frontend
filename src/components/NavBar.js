import React, { Component } from 'react'
import { Menu, Responsive, Icon } from 'semantic-ui-react'

class Header extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item header>MemoryHole</Menu.Item>
        <Menu.Item>
          <Icon link name='content' />
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header
