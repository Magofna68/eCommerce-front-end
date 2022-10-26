import React, { Component, setState } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/Form-input';
import CustomButton from '../utility/custom-button/Custom-button';
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils';

export default class SignIn extends React.Component {
constructor(props) {
  super(props);
  this.State = {
    email: "",
    password: "",
    
  }
}

handleSubmit = async (event) => {
  event.preventDefault();

  const { email, password } = this.state;
  console.log({email, password});

  try {
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({email: "", password: ""});
  } catch (error) {
    console.log(error);
  }
};

handleChange = (e) => {
  // e.preventDefault();
  const { value, name } = e.target;
  console.log({value, name});
  // dynamically set property value
  this.setState({[name]: value})
}

// handleClick = (e) => {

//   if () {
//     return;
//   } else {
//     window.location.href='#home';
//   }
// }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            id="email_input"
            // value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            password="password_input"
            // value={this.state.password} 
            handleChange={this.handleChange}
            label="Password"
            required 
          />
          <div className='button-container'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
