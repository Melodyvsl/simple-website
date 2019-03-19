import React from 'react';
import Display from './Display';
import Control from './Control';

class Form extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  // displayInfo = () => {
  //   this.setState({
  //     name: this.state.name,
  //     age: this.state.age,
  //   });
  // };

  render() {
    return (
      <div className="form">
        <h1> Contact us</h1>
        <Control
          displayInfo={(name, age, email) => this.setState({ name: name, age: age, email: email })}
        />
        <Display name={this.state.name} age={this.state.age} email={this.state.email} />
      </div>
    );
  }
}
export default Form;
