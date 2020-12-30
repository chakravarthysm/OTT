import React, { Component } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../reducers/features/profile/profileSlice'

function Navigation() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.User)
    const history = useHistory();

    const getMenuItems = () => {
        return <Menu>
            <Menu.Item position="right">
                <Button>
                    <NavLink to="/login">Login</NavLink>
                </Button>
                <Button style={{ marginLeft: '0.5em' }}>
                    <NavLink to="/signup">Signup</NavLink>
                </Button>
            </Menu.Item>
        </Menu>
    }

    const logout = () => {
        localStorage.removeItem("user");
        history.push("/");
        dispatch(logoutUser())
    }

    if (user) {
        return (
            <div>
                Welcome {user.firstname}
                <Menu style={{ marginLeft: '0.5em' }}>
                    <Menu.Item position="right">
                        <Button onClick={logout}>Logout</Button>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

    return getMenuItems()

}

export default Navigation