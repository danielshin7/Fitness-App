import React from 'react';
import './CreateAccountPage.css';

class CreateAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      password: '',
      diet: '',
      fitnessGoal: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted with data:', this.state);
    // You can also send the form data to your backend API for processing
  };

  render() {
    return (
      <div className="CreateAccountPage">
        <h2>Create Account</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" value={this.state.birthday} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="diet">Diet:</label>
            <select id="diet" value={this.state.diet} onChange={this.handleChange}>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="flexitarian">Flexitarian</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="fitnessGoal">Fitness Goal:</label>
            <select id="fitnessGoal" value={this.state.fitnessGoal} onChange={this.handleChange}>
              <option value="weightLoss">Weight Loss</option>
              <option value="muscleGain">Muscle Gain</option>
              <option value="maintenance">Maintenance</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccountPage;