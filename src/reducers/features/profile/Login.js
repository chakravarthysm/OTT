import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input name="username" type="text" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name="password" type="password" />
                    </Form.Field>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login