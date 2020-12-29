import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <Menu.Item position="right">
                        <Button>
                            <NavLink to="/login">Login</NavLink>
                        </Button>
                        <Button style={{ marginLeft: '0.5em' }}>
                            <NavLink to="/signup">Signup</NavLink>
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navigation