import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailValidationErr: "",
            passwordValidationErr: "",
            confirmPasswordValidationErr: "",
            form: {
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                password: "",
                confirmedPassword: ""
            }
        }
    }

    handleFirstName(event) {
        let currentFormValues = this.state.form;
        currentFormValues.firstName = event.target.value;
        this.setState({ form: currentFormValues })
    }

    handleLastName(event) {
        let currentFormValues = this.state.form;
        currentFormValues.lastName = event.target.value;
        this.setState({ form: currentFormValues })
    }

    handleDOB(event) {
        let currentFormValues = this.state.form;
        currentFormValues.dob = event.target.value;
        this.setState({ form: currentFormValues })
    }

    handleEmail(event) {
        if (event.target.value.length > 0) {
            let match = emailRegex.test(event.target.value);
            if (!match) {
                this.setState({ emailValidationErr: "Enter a valid email" })
                return
            }
        }

        let currentFormValues = this.state.form;
        currentFormValues.email = event.target.value;
        this.setState({ emailValidationErr: "", form: currentFormValues })
    }

    handlePassword(event) {
        if (event.target.value.length > 0) {
            let match = passwordRegex.test(event.target.value);
            if (!match) {
                this.setState({ passwordValidationErr: "Password should match this criteria: Minimum 10 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character:" })
                return
            }
        }

        let currentFormValues = this.state.form;
        currentFormValues.password = event.target.value;
        this.setState({ passwordValidationErr: "", form: currentFormValues })
    }

    handleConfirmPassword(event) {
        if (event.target.value.length > 0) {
            if (this.state.form.password != event.target.value) {
                this.setState({ confirmPasswordValidationErr: "Passwords doesn't match" })
                return
            }
        }

        let currentFormValues = this.state.form;
        currentFormValues.confirmedPassword = event.target.value;
        this.setState({ confirmPasswordValidationErr: "",form: currentFormValues  })
    }

    handleSubmit(event) {
        console.log(event)
        console.log(this.state)
    }

    render() {
        const anyErrors = this.state.emailValidationErr.length > 0 ||
            this.state.passwordValidationErr.length > 0 ||
            this.state.confirmPasswordValidationErr.length > 0

        const anyFieldValueIsZero = this.state.form.firstName.length == 0 ||
            this.state.form.lastName.length == 0 ||
            this.state.form.dob.length == 0 ||
            this.state.form.email.length == 0 ||
            this.state.form.password.length == 0 ||
            this.state.form.confirmedPassword.length == 0

        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input name="username" type="text" onChange={(e) => { this.handleFirstName(e) }} required />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name="password" type="text" onChange={(e) => { this.handleLastName(e) }} required />
                    </Form.Field>
                    <Form.Field>
                        <label>Date of Birth</label>
                        <input name="dob" type="date" onChange={(e) => { this.handleDOB(e) }} required />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input name="email" type="text" onChange={(e) => { this.handleEmail(e) }} required />
                        <span className="inputError">{this.state.emailValidationErr}</span>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name="password" type="password" onChange={(e) => { this.handlePassword(e) }} required />
                        <span className="inputError">{this.state.passwordValidationErr}</span>
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input name="confirmPassword" type="password" onChange={(e) => { this.handleConfirmPassword(e) }} required />
                        <span className="inputError">{this.state.confirmPasswordValidationErr}</span>
                    </Form.Field>
                    <Button type="submit" disabled={anyErrors || anyFieldValueIsZero} onClick={(e) => { this.handleSubmit(e) }}>Signup</Button>
                </Form>
            </div>
        )
    }
}

export default Signup