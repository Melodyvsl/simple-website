import React from 'react';
import propTypes from 'prop-types';

class Control extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { name, age, email } = this.state;
    this.props.displayInfo(name, age, email);
    // alert(
    //   'A name was submitted: ' +
    //     this.state.name +
    //     '\r\n' +
    //     'An age was submitted:' +
    //     this.state.age,
    //);
  };

  render() {
    return (
      <React.Fragment>
        <input
          placeholder="Enter Name"
          value={this.state.name}
          name="name"
          required={true}
          onChange={this.handleChange}
        />
        <br />
        <input
          placeholder="Enter Age"
          value={this.state.age}
          name="age"
          onChange={this.handleChange}
        />
        <br />
        <input
          placeholder="Enter email"
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
        />
        <br />
        <button type="submit" onClick={() => this.onSubmit()}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}

Control.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default Control;
