import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleHeader extends Component {
  
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item header>MemoryHole</Menu.Item>
        <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
        <Menu.Item name='Calender View' active={activeItem === 'Calender View'} onClick={this.handleItemClick} />
        <Menu.Item name='Start New Day' active={activeItem === 'Start New Day'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
