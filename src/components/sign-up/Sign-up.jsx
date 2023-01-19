import FormInput from '../form-input/Form-input.jsx';
import CustomButton from "../utility/custom-button/Custom-button.jsx";
import { auth, createUserProfileDocument } from '../../firebase/Firebase.utils';
import React, { Component } from 'react'
import './sign-up.styles.scss';
import Container from 'react-bootstrap/Container';

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

    handleSubmit = async event => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state

      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocument(user, { displayName });

        this.setState={
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
      } catch (error) {
        console.error(error);
      }
    }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  };

  render() {
    // destructure properties
    const { displayName, email, password, confirmPassword } = this.state
    return (
        <Container fluid>
        <h2 className='title'>Don't have an account?</h2>
        <span>Create an Account below:</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type="email"
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type="password"
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type="password"
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
        </Container>
    )
  }
}
