import React, { useRef } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from './profileSlice'
import { Redirect } from 'react-router';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,4}$/

function Signup() {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, watch } = useForm({ mode: 'onChange' })
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {
        dispatch(signUp(data))
    }

    const isSignedUp = useSelector(state => state.profile.SignupSuccessful)

    if (isSignedUp) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input name="firstName" type="text" ref={register({ required: true })} />
                    {errors.firstname && 'First name is required.'}
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lastName" type="text" ref={register({ required: true })} />
                    {errors.lastname && 'Last name is required.'}
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input name="dob" type="date" ref={register({ required: true })} />
                    {errors.dob && 'Date of birth is required.'}
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input name="email" type="text" ref={register({ required: true, pattern: emailRegex })} />
                    {errors.email?.type === "required" && 'Email is required.'}
                    {errors.email?.type === "pattern" && "Enter a valid email."}
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input name="password" type="password" ref={register({ required: true, pattern: passwordRegex })} />
                    {errors.password?.type === "required" && 'Password is required.'}
                    {errors.password?.type === "pattern" && 'Password should match this criteria: Minimum 10 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character.'}
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input name="confirmPassword" type="password" ref={register({
                        required: true, validate: value =>
                            value === password.current || "The passwords do not match"
                    })} />
                    {errors.confirmPassword?.type === "required" && 'Confirm password is required.'}
                    {errors.confirmPassword?.type === "validate" && errors.confirmPassword.message}
                </Form.Field>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup
