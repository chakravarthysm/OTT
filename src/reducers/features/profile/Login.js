import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { login } from './profileSlice'

function Login() {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({ mode: 'onChange' })
    const onSubmit = data => {
        dispatch(login(data))
    }

    const user = useSelector(state => state.profile.User)

    if (user) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Email</label>
                    <input name="email" type="text" ref={register({ required: true })}  />
                    {errors.email?.type === "required" && 'Email is required.'}
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input name="password" type="password" ref={register({ required: true })}  />
                    {errors.password?.type === "required" && 'Password is required.'}
                </Form.Field>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )

}

export default Login