import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
  handleCreateAccount = () => {
    // Logic to navigate to the create account page
    this.props.history.push('/create-account');
  };

  handleForgotPassword = () => {
    // Logic to handle resetting the password
    console.log('Forgot password...');
  };

  render() {
    return (
      <div className="LoginPage">
        <h2>User Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div>
          <button onClick={this.handleCreateAccount}>Create Account</button>
          <button onClick={this.handleForgotPassword}>Forgot Password</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;