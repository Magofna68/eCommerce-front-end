import React, { Component, setState } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/Form-input';
import CustomButton from '../utility/custom-button/Custom-button';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Container from 'react-bootstrap/Container'

const notyf = new Notyf();

export default class SignIn extends React.Component {
constructor(props) {
  super(props);
  this.State = {
    email: '',
    password: '',
  };
}
showSuccessAlert() {
  // window.location.href='https://magofna68.github.io/eCommerce-front-end/#/';
  window.location.href='http://localhost:3000/eCommerce-front-end#/'
  notyf.success({
    message: 'Sign in Successful',
    duration: 5000,
    dismissible: true,
  });

}

showErrorAlert() {
  notyf.error({
    message: 'Something went wrong. Please try again.',
    duration: 3000,
  });
}

handleSubmit = async (event) => {
  event.preventDefault();
  const { email, password } = this.state;
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("you have successfully been signed in", email);
    this.showSuccessAlert();
    this.setState({email: "", password: "",});
  } catch (error) {
    this.showErrorAlert()
    console.log(error);
  }
};

handleChange = (e) => {
  // e.preventDefault();
  const { value, name } = e.target;
  // console.log({value, name});
  // dynamically set property value
  this.setState({[name]: value})
}

  render() {
    return (
      <div className='sign-in'>
        <Container fluid>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            id="email_input"
            value={this.email}
            handleChange={this.handleChange}
            label="Email"
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            password="password_input"
            value={this.password} 
            handleChange={this.handleChange}
            label="Password"
            required 
          />
          <div className='button-container'>
            <CustomButton 
              type="submit" 
              value='submit'
              onClick={() => {
                this.setState({currentUser: true})
              }}
            >
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
        </Container>
      </div>
    )
  }
}
